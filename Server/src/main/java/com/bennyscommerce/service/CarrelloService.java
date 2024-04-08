package com.bennyscommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bennyscommerce.model.Carrello;
import com.bennyscommerce.repository.ArticoliDao;
import com.bennyscommerce.repository.CarrelloArticoliDao;
import com.bennyscommerce.repository.CarrelloDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CarrelloService {
    @Autowired
    private CarrelloDao carrelloDao;

    @Autowired
    private ArticoliDao articoliDao;

    @Autowired
    private CarrelloArticoliDao carrelloArticoliDao;

    public String updateArticoliByCarrello(Long articoloId, Long carrelloId) {
	if (articoliDao.existsById(articoloId) & carrelloDao.existsById(carrelloId)) {
	    carrelloArticoliDao.aggiungiArticoloAlCarrello(articoloId, carrelloId);
	    return "Articolo aggiunto al carrello";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + carrelloId + " or Articoli with ID --> "
		    + articoloId + " doesn't exists on Database!");
	}
    }

    public String deleteArticoliByCarrello(Long articoloId, Long carrelloId) {
	if (articoliDao.existsById(articoloId) & carrelloDao.existsById(carrelloId)) {
	    carrelloArticoliDao.rimuoviDalCarrello(articoloId, carrelloId);
	    return "Articolo rimosso dal carrello";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + carrelloId + " or Articoli with ID --> "
		    + articoloId + " doesn't exists on Database!");
	}
    }

    public String deleteAllArticoliByCarrello(Long carrelloId) {
	if (carrelloDao.existsById(carrelloId)) {
	    carrelloArticoliDao.rimuoviTuttiDalCarrello(carrelloId);
	    return "Tutti gli articoli sono stati rimossi dal carrello";
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + carrelloId + " doesn't exists on Database!");
	}
    }

    public Carrello FindCarrelloById(Long id) {
	if (carrelloDao.existsById(id)) {
	    return carrelloDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Carrello with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Carrello> findAll() {
	return carrelloDao.findAll();
    }

}
