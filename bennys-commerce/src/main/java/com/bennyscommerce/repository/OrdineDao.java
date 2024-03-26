package com.bennyscommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bennyscommerce.model.Ordine;

@Repository
public interface OrdineDao extends JpaRepository<Ordine, Long> {

}
