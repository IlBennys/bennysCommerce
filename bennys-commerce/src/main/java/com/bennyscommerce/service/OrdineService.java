package com.bennyscommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bennyscommerce.repository.OrdineDao;

@Service
public class OrdineService {
    @Autowired
    private OrdineDao ordineDao;

    // @Autowired
    // private UserService userService;
    @Autowired
    private CarrelloService carrelloService;
}
