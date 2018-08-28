package com.shopcar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ShopCarOnlineApp {
    public static void main(String args[]) {
        SpringApplication.run(ShopCarOnlineApp.class, args);
    }
}
