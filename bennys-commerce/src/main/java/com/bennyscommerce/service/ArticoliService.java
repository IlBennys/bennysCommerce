package com.bennyscommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.bennyscommerce.model.Articoli;
import com.bennyscommerce.repository.ArticoliDao;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ArticoliService {

    @Autowired
    private ArticoliDao articoliDao;

    @Autowired
    @Qualifier("Mouse1")
    private ObjectProvider<Articoli> objArticoli1;
    @Autowired
    @Qualifier("Mouse2")
    private ObjectProvider<Articoli> objArticoli2;
    @Autowired
    @Qualifier("Mouse3")
    private ObjectProvider<Articoli> objArticoli3;
    @Autowired
    @Qualifier("Mouse4")
    private ObjectProvider<Articoli> objArticoli4;
    @Autowired
    @Qualifier("Mouse5")
    private ObjectProvider<Articoli> objArticoli5;
    @Autowired
    @Qualifier("Mouse6")
    private ObjectProvider<Articoli> objArticoli6;
    @Autowired
    @Qualifier("Mouse7")
    private ObjectProvider<Articoli> objArticoli7;
    @Autowired
    @Qualifier("Mouse8")
    private ObjectProvider<Articoli> objArticoli8;
    @Autowired
    @Qualifier("Mouse9")
    private ObjectProvider<Articoli> objArticoli9;

    public void createArticolo1() {
	Articoli a = objArticoli1.getObject();
	articoliDao.save(a);
    }

    public void createArticolo2() {
	Articoli a = objArticoli2.getObject();
	articoliDao.save(a);
    }

    public void createArticolo3() {
	Articoli a = objArticoli3.getObject();
	articoliDao.save(a);
    }

    public void createArticolo4() {
	Articoli a = objArticoli4.getObject();
	articoliDao.save(a);
    }

    public void createArticolo5() {
	Articoli a = objArticoli5.getObject();
	articoliDao.save(a);
    }

    public void createArticolo6() {
	Articoli a = objArticoli6.getObject();
	articoliDao.save(a);
    }

    public void createArticolo7() {
	Articoli a = objArticoli7.getObject();
	articoliDao.save(a);
    }

    public void createArticolo8() {
	Articoli a = objArticoli8.getObject();
	articoliDao.save(a);
    }

    public void createArticolo9() {
	Articoli a = objArticoli9.getObject();
	articoliDao.save(a);
    }

    public String postArticolo(Articoli a) {
	articoliDao.save(a);
	return "Articolo correctly persisted on Database!";
    }

    public String updateArticolo(Articoli a) {
	if (articoliDao.existsById(a.getId())) {
	    articoliDao.save(a);
	    return "Articolo correctly updated on Database";
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + a.getId() + " doesn't exists on Database!");
	}
    }

    public String deleteArticolo(Long id) {
	if (articoliDao.existsById(id)) {
	    articoliDao.deleteById(id);
	    return "Articolo correctly deleted from Database";
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public Articoli FindArticoloById(Long id) {
	if (articoliDao.existsById(id)) {
	    return articoliDao.findById(id).get();
	} else {
	    throw new EntityNotFoundException("Articolo with ID --> " + id + " doesn't exists on Database!");
	}
    }

    public List<Articoli> findAll() {
	return articoliDao.findAll();
    }

    public Optional<List<Articoli>> findAllByPrezzo(Double s1, Double s2) {
	return articoliDao.getAllArticoliByPrezzo(s1, s2);
    }

    public Optional<List<Articoli>> findAllByName(String name) {
	return articoliDao.getAllArticoliByNome(name);
    }

}
