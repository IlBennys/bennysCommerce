package com.bennyscommerce.repository;

import org.springframework.stereotype.Repository;

import com.bennyscommerce.model.Articoli;
import com.bennyscommerce.model.Carrello;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
public class CarrelloArticoliDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void aggiungiArticoloAlCarrello(Long articoloId, Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	Articoli articoli = entityManager.find(Articoli.class, articoloId);

	if (carrello != null && articoli != null) {
	    carrello.getArticoli().add(articoli);
	    entityManager.merge(carrello);
	}
    }

    @Transactional
    public void rimuoviDalCarrello(Long articoloId, Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	if (carrello != null) {
	    carrello.getArticoli().removeIf(articolo -> articolo.getId() == articoloId);
	}
    }
}
