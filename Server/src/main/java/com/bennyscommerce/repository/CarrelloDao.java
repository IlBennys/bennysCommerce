package com.bennyscommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bennyscommerce.model.Carrello;

public interface CarrelloDao extends JpaRepository<Carrello, Long> {

}
