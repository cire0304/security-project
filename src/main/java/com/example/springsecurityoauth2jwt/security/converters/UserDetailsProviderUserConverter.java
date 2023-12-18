package com.example.springsecurityoauth2jwt.security.converters;

import com.example.springsecurityoauth2jwt.security.model.ProviderUser;
import com.example.springsecurityoauth2jwt.security.model.User;
import com.example.springsecurityoauth2jwt.security.model.form.FormUser;
import org.springframework.stereotype.Component;

@Component
public class UserDetailsProviderUserConverter implements ProvierUserConverter<ProviderUserRequest, ProviderUser> {
    @Override
    public ProviderUser converter(ProviderUserRequest providerUserRequest) {
        if (providerUserRequest.user() == null) {
            return null;
        }

        User user = providerUserRequest.user();
        return FormUser.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(user.getAuthorities())
                .provider("none")
                .build();
    }
}
