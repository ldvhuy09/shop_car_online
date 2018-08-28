package com.shopcar.api.header;

import com.shopcar.configuration.ConfigProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

public class ResponseConfig {
    public static ResponseEntity responseWithAllowOrigin(Object object) {
        String allowedOrigin = ConfigProperties.getAllowOrigin();
        HttpHeaders header = new HttpHeaders();
        header.setAccessControlAllowOrigin(allowedOrigin);
        return ResponseEntity.ok().headers(header).body(object);
    }
}