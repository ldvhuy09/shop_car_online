package com.shopcar.payload;

import org.springframework.http.HttpStatus;

public class AuthenticationPayload{
    private String accessToken;
    private String tokenType = "Bearer";

    public AuthenticationPayload(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}
