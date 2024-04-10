package com.bennyscommerce.stripe;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PaymentConfiguration {

    @Bean(name = "paymentHandlerBean")
    public PaymentHandler paymentHandler() {
	return new PaymentHandler();
    }

    @Bean(name = "paymentServiceBean")
    public PaymentService paymentService(PaymentHandler paymentHandler, PaymentRepository paymentRepository) {
	return new PaymentService();
    }

}
