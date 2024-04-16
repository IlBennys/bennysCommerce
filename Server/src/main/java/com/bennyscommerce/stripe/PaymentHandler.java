package com.bennyscommerce.stripe;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.EphemeralKey;
import com.stripe.model.PaymentIntent;
import com.stripe.param.EphemeralKeyCreateParams;
import com.stripe.param.PaymentIntentCreateParams;

public class PaymentHandler {

    @Value("${stripe.secret.key}")
    private String STRIPE_SECRET_KEY;

    @Value("${stripe.publishable.key}")
    private String STRIPE_PUBLISHABLED_KEY;

    private static final Gson gson = new Gson();

    public String handlePayment(String customerId) {
	if (customerId == null) {
	    throw new IllegalArgumentException("User or user ID is null");
	}

	Stripe.apiKey = STRIPE_SECRET_KEY;

	EphemeralKey ephemeralKey = null;
	try {
	    EphemeralKeyCreateParams ephemeralKeyParams = EphemeralKeyCreateParams.builder()
		    .setStripeVersion("2023-10-16").setCustomer(customerId).build();
	    ephemeralKey = EphemeralKey.create(ephemeralKeyParams);
	} catch (StripeException e) {
	    e.printStackTrace();

	}

	PaymentIntent paymentIntent = null;
	try {
	    PaymentIntentCreateParams paymentIntentParams = PaymentIntentCreateParams.builder().setAmount(1099L)
		    .setCustomer(customerId).setCurrency("eur")
		    .setAutomaticPaymentMethods(
			    PaymentIntentCreateParams.AutomaticPaymentMethods.builder().setEnabled(true).build())
		    .build();
	    paymentIntent = PaymentIntent.create(paymentIntentParams);
	} catch (StripeException e) {
	    e.printStackTrace();

	}

	Map<String, String> responseData = new HashMap<>();
	if (paymentIntent != null) {
	    responseData.put("paymentIntent", paymentIntent.getClientSecret());
	}
	if (ephemeralKey != null) {
	    responseData.put("ephemeralKey", ephemeralKey.getSecret());
	}
	responseData.put("customer", customerId);
	responseData.put("publishableKey", STRIPE_PUBLISHABLED_KEY);

	return gson.toJson(responseData);
    }
}
