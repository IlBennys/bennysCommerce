package com.bennyscommerce.auth.service;

import com.bennyscommerce.auth.payload.LoginDto;
import com.bennyscommerce.auth.payload.RegisterDto;

public interface AuthService {

    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);
}
