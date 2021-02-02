package com.neu;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@MapperScan("com.neu.mapper")
@EnableCaching//启用缓存
public class SpringBootApplicationDemo  {
		public static void main(String[] args) {
			SpringApplication.run(SpringBootApplicationDemo.class, args);
		}
		
}

