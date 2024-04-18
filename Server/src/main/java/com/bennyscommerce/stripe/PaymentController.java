package com.bennyscommerce.stripe;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bennyscommerce.auth.entity.User;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.stripe.exception.StripeException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/pagamento")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/{customerId}")
    public ResponseEntity<Map<String, String>> handlePaymentRequest(@PathVariable("customerId") String customerId) {
	String paymentResponse = paymentService.processPayment(customerId);
	Map<String, String> responseData = new Gson().fromJson(paymentResponse, new TypeToken<Map<String, String>>() {
	}.getType());
	return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/registrazione")
    public ResponseEntity<String> registerUser(@RequestBody User user) {

	try {
	    String customerId = paymentService.createStripeCustomer(user.getEmail(), user.getFirstname());
	    return new ResponseEntity<>("User registered successfully. Stripe Customer ID: " + customerId,
		    HttpStatus.OK);
	} catch (StripeException e) {
	    e.printStackTrace();
	    return new ResponseEntity<>("Error registering user. Please try again later.",
		    HttpStatus.INTERNAL_SERVER_ERROR);
	}
    }

}
