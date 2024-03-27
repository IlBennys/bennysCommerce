package com.bennyscommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bennyscommerce.model.Articoli;
import com.bennyscommerce.service.ArticoliService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/articolo")
public class ArticoliController {

    @Autowired
    private ArticoliService articoliService;

    @GetMapping
    public ResponseEntity<?> findAllArticoli() {
	return new ResponseEntity<>(articoliService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findArticoloById(@PathVariable Long id) {
	return new ResponseEntity<>(articoliService.FindArticoloById(id), HttpStatus.OK);
    }

    @GetMapping("/prezzo/{s1}/{s2}")
    public ResponseEntity<?> findArticoliByPrezzo(@PathVariable Double s1, @PathVariable Double s2) {
	return new ResponseEntity<>(articoliService.findAllByPrezzo(s1, s2), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> findArticoliByNome(@PathVariable String name) {
	return new ResponseEntity<>(articoliService.findAllByName(name), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateArticolo(@RequestBody Articoli a) {
	return new ResponseEntity<String>(articoliService.updateArticolo(a), HttpStatus.OK);
    };

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteArticolo(@PathVariable Long id) {
	return new ResponseEntity<>(articoliService.deleteArticolo(id), HttpStatus.OK);
    }

}
