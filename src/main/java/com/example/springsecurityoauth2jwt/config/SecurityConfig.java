package com.example.springsecurityoauth2jwt.config;

import com.example.springsecurityoauth2jwt.security.common.AjaxLoginAuthenticationEntryPoint;
import com.example.springsecurityoauth2jwt.security.filter.AjaxLoginProcessingFilter;
import com.example.springsecurityoauth2jwt.security.handler.AjaxAccessDeniedHandler;
import com.example.springsecurityoauth2jwt.security.handler.AjaxAuthenticationFailureHandler;
import com.example.springsecurityoauth2jwt.security.handler.AjaxAuthenticationSuccessHandler;
import com.example.springsecurityoauth2jwt.security.provider.AjaxAuthenticationProvider;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.context.DelegatingSecurityContextRepository;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.RequestAttributeSecurityContextRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.io.PrintWriter;
import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private String[] ignoredMatcherPattern = {"/static/**", "/css/**", "/js/**", "/static/css/images/**", "/webjars/**", "/**/favicon.ico"};
    private String[] permitAllPattern = {"/", "/home", "/users", "/login", "/errorpage/**"};

    public static final String AUTHENTICATION_HEADER_NAME = "Authorization";
    public static final String AUTHENTICATION_URL = "/api/auth/login";
    public static final String REFRESH_TOKEN_URL = "/api/auth/token";
    public static final String API_ROOT_URL = "/api/**";

    private final AuthenticationConfiguration authenticationConfiguration;
    private final AjaxAuthenticationProvider ajaxAuthenticationProvider;

    @Bean
    public AjaxLoginProcessingFilter ajaxLoginProcessingFilter(HttpSecurity http) throws Exception {
        AjaxLoginProcessingFilter ajaxLoginProcessingFilter = new AjaxLoginProcessingFilter(http);
        ajaxLoginProcessingFilter.setFilterProcessesUrl("/login");
        ajaxLoginProcessingFilter.setAuthenticationManager(authenticationManager());
        ajaxLoginProcessingFilter.setAuthenticationSuccessHandler(authenticationSuccessHandler());
        ajaxLoginProcessingFilter.setAuthenticationFailureHandler(authenticationFailureHandler());
        return ajaxLoginProcessingFilter;
    }

    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        ProviderManager authenticationManager = (ProviderManager) authenticationConfiguration.getAuthenticationManager();
        authenticationManager.getProviders().add(ajaxAuthenticationProvider);
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AjaxAuthenticationSuccessHandler(delegatingSecurityContextRepository());
    }

    @Bean
    public AuthenticationFailureHandler authenticationFailureHandler() {
        return new AjaxAuthenticationFailureHandler();
    }

    @Bean
    public AccessDeniedHandler ajaxAccessDeniedHandler() {
        return new AjaxAccessDeniedHandler();
    }

    @Bean
    public DelegatingSecurityContextRepository delegatingSecurityContextRepository() {
        return new DelegatingSecurityContextRepository(
                new RequestAttributeSecurityContextRepository(),
                new HttpSessionSecurityContextRepository()
        );
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(List.of("http://127.0.0.1:5500", "https://127.0.0.1:5500"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return http
                .authorizeHttpRequests(config -> config
                        .requestMatchers("/user").hasRole("USER")
                        .requestMatchers("/admin").hasRole("ADMIN")
                        .anyRequest().permitAll()
                )
//                .oauth2Login(login -> login
//                        .loginPage("/login")
//                        .defaultSuccessUrl("/")
//                        .userInfoEndpoint( config -> config
//                                .userService()
//                        )
//                )
                .sessionManagement(config -> config
                        .maximumSessions(1)
                        .maxSessionsPreventsLogin(true)
                )
                .exceptionHandling(config -> config
                        .authenticationEntryPoint(new AjaxLoginAuthenticationEntryPoint())
                        .accessDeniedHandler(ajaxAccessDeniedHandler())
                )
                .addFilterBefore(ajaxLoginProcessingFilter(http), UsernamePasswordAuthenticationFilter.class)
                .csrf(config -> config.disable())
                .cors(config -> config.configurationSource(source))
                .headers(headerConfig -> headerConfig.httpStrictTransportSecurity(config -> config
                        .preload(false)))
                .build();
    }

    private final AuthenticationEntryPoint unauthorizedEntryPoint =
            (request, response, authException) -> {
                ErrorResponse fail = new ErrorResponse(HttpStatus.FORBIDDEN, "Spring security forbidden...");

                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                String json = new ObjectMapper().writeValueAsString(fail);
                PrintWriter writer = response.getWriter();
                writer.write(json);
                writer.flush();
            };

    @Getter
    @RequiredArgsConstructor
    public class ErrorResponse {

        private final HttpStatus status;
        private final String message;
    }

}
