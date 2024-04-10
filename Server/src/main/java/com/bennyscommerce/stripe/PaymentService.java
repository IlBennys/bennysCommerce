package com.bennyscommerce.stripe;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PaymentService {
    @Autowired
    private PaymentHandler paymentHandler;

    @Autowired
    private PaymentRepository paymentRepository;

    @Value("${stripe.secret.key}")
    private String STRIPE_SECRET_KEY;

    public String createStripeCustomer(String email, String name) throws StripeException {
	Stripe.apiKey = STRIPE_SECRET_KEY;

	Map<String, Object> params = new HashMap<>();
	params.put("email", email);
	params.put("name", name);

	Customer customer = Customer.create(params);

	return customer.getId();
    }

    public String processPayment(String customerId) {
	String paymentResponse = paymentHandler.handlePayment(customerId);

	Map<String, String> paymentResponseMap = new Gson().fromJson(paymentResponse,
		new TypeToken<Map<String, String>>() {
		}.getType());

	PaymentModel payment = new PaymentModel();
	payment.setPaymentIntent(paymentResponseMap.get("paymentIntent"));
	payment.setEphemeralKey(paymentResponseMap.get("ephemeralKey"));
	payment.setCustomerId(paymentResponseMap.get("customer"));
	payment.setPublishableKey(paymentResponseMap.get("publishableKey"));
	payment.setCustomerId(customerId);

	paymentRepository.save(payment);

	return paymentResponse;
    }

    public PaymentModel FindCustomerStripeById(Long id) {
	if (paymentRepository.existsById(id)) {
	    return paymentRepository.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Customer stipe with ID --> " + id + " doesn't exists on Database!");
	}
    }

}
