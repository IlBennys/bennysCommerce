package com.bennyscommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.bennyscommerce.model.Articoli;

@Repository
public interface ArticoliDao extends JpaRepository<Articoli, Long>, PagingAndSortingRepository<Articoli, Long> {
    Optional<Articoli> findArticoliById(Long id);

    // ordine range del prezzo
    @Query("SELECT a FROM Articoli a WHERE a.prezzo BETWEEN ?1 AND ?2")
    Optional<List<Articoli>> getAllArticoliByPrezzo(String s1, String s2);

    // filtro per ordinare gli articoli in base al loro nome
    @Query("SELECT a FROM Articoli a WHERE a.nomeArticolo LIKE :name")
    Optional<List<Articoli>> getAllArticoliByNome(String name);
}
