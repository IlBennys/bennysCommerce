package com.bennyscommerce.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bennyscommerce.auth.payload.JWTAuthResponse;
import com.bennyscommerce.auth.payload.LoginDto;
import com.bennyscommerce.auth.payload.RegisterDto;
import com.bennyscommerce.auth.service.AuthService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService) {
	this.authService = authService;
    }

    @PostMapping(value = { "/login", "/signin" })
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto) {

	String token = authService.login(loginDto);

	JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
	jwtAuthResponse.setUsername(loginDto.getUsername());
	jwtAuthResponse.setAccessToken(token);

	return ResponseEntity.ok(jwtAuthResponse);
    }

    @PostMapping(value = { "/register", "/signup" })
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
	String response = authService.register(registerDto);
	return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
