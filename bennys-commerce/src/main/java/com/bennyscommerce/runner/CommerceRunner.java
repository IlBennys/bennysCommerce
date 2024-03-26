package com.bennyscommerce.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.bennyscommerce.service.ArticoliService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CommerceRunner implements ApplicationRunner {

    @Autowired
    private ArticoliService articoliService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
	for (int i = 0; i < 1; i++) {
	    articoliService.createArticolo1();
	    articoliService.createArticolo2();
	    articoliService.createArticolo3();
	    articoliService.createArticolo4();
	    articoliService.createArticolo5();
	    articoliService.createArticolo6();
	    articoliService.createArticolo7();
	    articoliService.createArticolo8();
	    articoliService.createArticolo9();
	}
	log.info("Articoli creati!");
    }

}
