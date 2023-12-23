server.ssl.key-store: keystore.p12
server.ssl.key-store-password: 123456
server.ssl.keyStoreType: PKCS12
server.ssl.keyAlias: tomcat

===

keytool -genkey \
        -alias tomcat \
        -storetype PKCS12 \
        -keyalg RSA \
        -keysize 2048 \
        -keystore keystore.p12 \ 
        -validity 4000 


===

# live server https 설정 방법

https://velog.io/@huisso/vscode-LiveServer-http-%EC%97%90%EC%84%9C-https-%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95feat.-cors-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81

# 리액트에서 https 설정하는 방법

https://365ok.co.kr/okdown/7802