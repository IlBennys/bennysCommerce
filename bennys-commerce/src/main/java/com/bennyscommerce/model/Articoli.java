package com.bennyscommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "articoli")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Articoli {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nomeArticolo;
    private Double prezzo;
    private String descrizioneArticolo;
    private String img;
    private String brand;

}
