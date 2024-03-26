package com.bennyscommerce.model;

import java.time.LocalDate;
import java.util.List;

import com.bennyscommerce.auth.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ordine")
public class Ordine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private StatoOrdine statoOrdine;

    private String riepilogoOrdine;
    private LocalDate dataConsegna;
    private LocalDate dataOrdine;
    private double prezzoConsegna;

    @OneToOne(fetch = FetchType.EAGER, cascade = { CascadeType.MERGE, CascadeType.REMOVE, CascadeType.REFRESH })
    @JsonIgnoreProperties({ "ordine" })
    private Carrello carrello;

    @ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.MERGE, CascadeType.REFRESH })
    private List<Articoli> articoli;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({ "ordini", "carrello" })
    private User user;
}
