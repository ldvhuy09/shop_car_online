package com.shopcar.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("header")
public class ConfigProperties {
    private static String allow_origin = "http://localhost:3000";
    private static String host_img = "https://res.cloudinary.com/ldvhuy09/image/upload/v1534821366/cars/";
    public static String getAllowOrigin() {
        return allow_origin;
    }
    public static String getHostImage() {
        return host_img;
    }
}
