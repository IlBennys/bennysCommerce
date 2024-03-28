package com.bennyscommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
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
    @Autowired
    @Qualifier("Monitor1")
    private ObjectProvider<Articoli> objArticoli10;
    @Autowired
    @Qualifier("Monitor2")
    private ObjectProvider<Articoli> objArticoli11;
    @Autowired
    @Qualifier("Monitor3")
    private ObjectProvider<Articoli> objArticoli12;
    @Autowired
    @Qualifier("Monitor4")
    private ObjectProvider<Articoli> objArticoli13;
    @Autowired
    @Qualifier("Monitor5")
    private ObjectProvider<Articoli> objArticoli14;
    @Autowired
    @Qualifier("Monitor6")
    private ObjectProvider<Articoli> objArticoli15;
    @Autowired
    @Qualifier("Monitor7")
    private ObjectProvider<Articoli> objArticoli16;
    @Autowired
    @Qualifier("Monitor8")
    private ObjectProvider<Articoli> objArticoli17;
    @Autowired
    @Qualifier("Monitor9")
    private ObjectProvider<Articoli> objArticoli18;
    @Autowired
    @Qualifier("Keyboard1")
    private ObjectProvider<Articoli> objArticoli19;
    @Autowired
    @Qualifier("Keyboard2")
    private ObjectProvider<Articoli> objArticoli20;
    @Autowired
    @Qualifier("Keyboard3")
    private ObjectProvider<Articoli> objArticoli21;
    @Autowired
    @Qualifier("Keyboard4")
    private ObjectProvider<Articoli> objArticoli22;
    @Autowired
    @Qualifier("Keyboard5")
    private ObjectProvider<Articoli> objArticoli23;
    @Autowired
    @Qualifier("Keyboard6")
    private ObjectProvider<Articoli> objArticoli24;
    @Autowired
    @Qualifier("Keyboard7")
    private ObjectProvider<Articoli> objArticoli25;
    @Autowired
    @Qualifier("Keyboard8")
    private ObjectProvider<Articoli> objArticoli26;
    @Autowired
    @Qualifier("Keyboard9")
    private ObjectProvider<Articoli> objArticoli27;

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

    public void createArticolo10() {
	Articoli a = objArticoli10.getObject();
	articoliDao.save(a);
    }

    public void createArticolo11() {
	Articoli a = objArticoli11.getObject();
	articoliDao.save(a);
    }

    public void createArticolo12() {
	Articoli a = objArticoli12.getObject();
	articoliDao.save(a);
    }

    public void createArticolo13() {
	Articoli a = objArticoli13.getObject();
	articoliDao.save(a);
    }

    public void createArticolo14() {
	Articoli a = objArticoli14.getObject();
	articoliDao.save(a);
    }

    public void createArticolo15() {
	Articoli a = objArticoli15.getObject();
	articoliDao.save(a);
    }

    public void createArticolo16() {
	Articoli a = objArticoli16.getObject();
	articoliDao.save(a);
    }

    public void createArticolo17() {
	Articoli a = objArticoli17.getObject();
	articoliDao.save(a);
    }

    public void createArticolo18() {
	Articoli a = objArticoli18.getObject();
	articoliDao.save(a);
    }

    public void createArticolo19() {
	Articoli a = objArticoli19.getObject();
	articoliDao.save(a);
    }

    public void createArticolo20() {
	Articoli a = objArticoli20.getObject();
	articoliDao.save(a);
    }

    public void createArticolo21() {
	Articoli a = objArticoli21.getObject();
	articoliDao.save(a);
    }

    public void createArticolo22() {
	Articoli a = objArticoli22.getObject();
	articoliDao.save(a);
    }

    public void createArticolo23() {
	Articoli a = objArticoli23.getObject();
	articoliDao.save(a);
    }

    public void createArticolo24() {
	Articoli a = objArticoli24.getObject();
	articoliDao.save(a);
    }

    public void createArticolo25() {
	Articoli a = objArticoli25.getObject();
	articoliDao.save(a);
    }

    public void createArticolo26() {
	Articoli a = objArticoli26.getObject();
	articoliDao.save(a);
    }

    public void createArticolo27() {
	Articoli a = objArticoli27.getObject();
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

    public List<Page<Articoli>> findArticoliByPage() {
	return articoliDao.getArticoliByPage();
    }

    public Optional<Page<Articoli>> findArticoliByPageNum(int pageNumber, int pageSize) {
	return articoliDao.getArticoliByPageNum(pageNumber, pageSize);
    }
}
