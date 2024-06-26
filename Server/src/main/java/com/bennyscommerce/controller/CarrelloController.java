package com.bennyscommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bennyscommerce.service.CarrelloService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/carrello")
public class CarrelloController {
    @Autowired
    private CarrelloService carrelloService;

    @GetMapping
    public ResponseEntity<?> findAllCarrello() {
	return new ResponseEntity<>(carrelloService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCarrelloById(@PathVariable Long id) {
	return new ResponseEntity<>(carrelloService.FindCarrelloById(id), HttpStatus.OK);
    }

    @PostMapping("/{carrelloId}/articoli/{articoloId}")
    public ResponseEntity<String> aggiungiArticoloAlCarrello(@PathVariable("carrelloId") Long carrelloId,
	    @PathVariable("articoloId") Long articoloId) {
	return new ResponseEntity<>(carrelloService.updateArticoliByCarrello(articoloId, carrelloId),
		HttpStatus.CREATED);
    }

    @DeleteMapping("/tutti/articoli/{carrelloId}")
    public ResponseEntity<String> rimuoviTuttiArticoliDalCarrello(@PathVariable("carrelloId") Long carrelloId) {
	return new ResponseEntity<>(carrelloService.deleteAllArticoliByCarrello(carrelloId), HttpStatus.OK);
    }

    @DeleteMapping("/{carrelloId}/articoli/{articoloId}")
    public ResponseEntity<String> rimuoviArticoloDalCarrello(@PathVariable("carrelloId") Long carrelloId,
	    @PathVariable("articoloId") Long articoloId) {
	return new ResponseEntity<>(carrelloService.deleteArticoliByCarrello(articoloId, carrelloId), HttpStatus.OK);
    }
}
