package com.bennyscommerce.auth.payload;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class ErrorDetails {
    @SuppressWarnings("unused")
    private Date timestamp;
    @SuppressWarnings("unused")
    private String message;
    @SuppressWarnings("unused")
    private String details;

}
