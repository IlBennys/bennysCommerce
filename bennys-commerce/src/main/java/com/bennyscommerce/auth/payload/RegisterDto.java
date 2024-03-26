package com.bennyscommerce.auth.payload;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private String password;
    private String dataNascita;
    private String indirizzo;
    private String numeroTelefono;

    private Set<String> roles;
}
