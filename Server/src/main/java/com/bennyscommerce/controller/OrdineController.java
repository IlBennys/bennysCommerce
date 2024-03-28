package com.bennyscommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bennyscommerce.model.Ordine;
import com.bennyscommerce.service.OrdineService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/ordine")
public class OrdineController {
    @Autowired
    OrdineService ordineService;

    @GetMapping
    public ResponseEntity<?> findAllOrdine() {
	return new ResponseEntity<>(ordineService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findOrdineById(@PathVariable Long id) {
	return new ResponseEntity<>(ordineService.FindOrdineById(id), HttpStatus.OK);
    }

    @PostMapping("/user/{idUser}/carrello/{idCarrello}")
    public ResponseEntity<?> addNewOrdine(@PathVariable Long idUser, @PathVariable Long idCarrello) {
	return new ResponseEntity<String>(ordineService.postOrdine(idUser, idCarrello), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrdine(@RequestBody Ordine o) {
	return new ResponseEntity<String>(ordineService.updateOrdine(o), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrdineById(@PathVariable Long id) {
	return new ResponseEntity<>(ordineService.deleteOrdine(id), HttpStatus.OK);
    }
}
