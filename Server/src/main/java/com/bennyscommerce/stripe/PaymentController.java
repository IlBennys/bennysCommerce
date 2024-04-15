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
import com.bennyscommerce.auth.repository.UserRepository;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.stripe.exception.StripeException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/pagamento")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserRepository userRepository;

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

    /*
     * @GetMapping("/registrazione/{userId}") public ResponseEntity<String>
     * getUserDetails(@PathVariable("userId") Long userId) {
     * 
     * User user = userRepository.findById(userId).orElse(null); if (user == null) {
     * return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND); } try {
     * String customerId = paymentService.createStripeCustomer(user.getEmail(),
     * user.getFirstname()); if (customerId != null) { return new ResponseEntity<>(
     * "User ID: " + userId + "\nEmail: " + user.getEmail() +
     * "\nStripe Customer ID: " + customerId, HttpStatus.OK); } else { return new
     * ResponseEntity<>("Stripe customer ID not found for the user",
     * HttpStatus.NOT_FOUND); } } catch (StripeException e) { e.printStackTrace();
     * return new
     * ResponseEntity<>("Error retrieving user details. Please try again later.",
     * HttpStatus.INTERNAL_SERVER_ERROR); } }
     */

}
