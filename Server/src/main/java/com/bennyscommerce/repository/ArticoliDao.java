package com.bennyscommerce.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    Optional<List<Articoli>> getAllArticoliByPrezzo(Double s1, Double s2);

    default List<Page<Articoli>> getArticoliByPage() {
	List<Page<Articoli>> pages = new ArrayList<>();

	for (int i = 0; i < 3; i++) {
	    Pageable pageable = PageRequest.of(i, 9);
	    pages.add(findAll(pageable));
	}

	return pages;
    }

    default Optional<Page<Articoli>> getArticoliByPageNum(int pageNumber, int pageSize) {
	Pageable pageable = PageRequest.of(pageNumber, pageSize);
	return Optional.of(findAll(pageable));
    }
}
