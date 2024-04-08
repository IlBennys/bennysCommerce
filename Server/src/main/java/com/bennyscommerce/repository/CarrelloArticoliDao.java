package com.bennyscommerce.repository;

import java.util.List;

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
    public void rimuoviTuttiDalCarrello(Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	if (carrello != null) {
	    List<Articoli> articoli = carrello.getArticoli();
	    carrello.getArticoli().removeAll(articoli);
	}
    }

    @Transactional
    public void rimuoviDalCarrello(Long articoloId, Long carrelloId) {
	Carrello carrello = entityManager.find(Carrello.class, carrelloId);
	if (carrello != null) {
	    List<Articoli> articoli = carrello.getArticoli();
	    for (int i = 0; i < articoli.size(); i++) {
		if (articoli.get(i).getId() == articoloId) {
		    articoli.remove(i);
		    break;
		}
	    }
	}
    }
}
