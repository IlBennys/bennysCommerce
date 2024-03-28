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
	    articoliService.createArticolo10();
	    articoliService.createArticolo11();
	    articoliService.createArticolo12();
	    articoliService.createArticolo13();
	    articoliService.createArticolo14();
	    articoliService.createArticolo15();
	    articoliService.createArticolo16();
	    articoliService.createArticolo17();
	    articoliService.createArticolo18();
	    articoliService.createArticolo19();
	    articoliService.createArticolo20();
	    articoliService.createArticolo21();
	    articoliService.createArticolo22();
	    articoliService.createArticolo23();
	    articoliService.createArticolo24();
	    articoliService.createArticolo25();
	    articoliService.createArticolo26();
	    articoliService.createArticolo27();
	}
	log.info("Articoli creati!");
    }

}
