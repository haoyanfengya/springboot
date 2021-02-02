package com.neu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.neu.interceptor.Interceptor;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
	
	@Autowired
	private Interceptor initInterceptor; 
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(initInterceptor);
	}
}

