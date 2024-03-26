package com.bennyscommerce.configuration;

import java.time.LocalDate;
import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.bennyscommerce.model.Articoli;
import com.bennyscommerce.model.Carrello;
import com.bennyscommerce.model.Ordine;
import com.bennyscommerce.model.StatoOrdine;
import com.github.javafaker.Faker;

@Configuration
public class CommerceConfiguration {

    private Faker fake = Faker.instance(new Locale("it-IT"));

    // -------------------------------- MOUSE --------------------

    @Bean("Mouse1")
    @Scope("prototype")
    public Articoli Articolo1() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://m.media-amazon.com/images/I/61N+CzcA8vL._AC_UF894,1000_QL80_.jpg").brand("Logitech")
		.descrizioneArticolo(
			"Logitech M185, 2,4 GHz con Mini Ricevitore USB, Durata Batteria di 12 Mesi, Tracciamento Ottico 1000 DPI, Ambidestro - Grigio")

		.build();
    }

    @Bean("Mouse2")
    @Scope("prototype")
    public Articoli Articolo2() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Cablato").img(
		"https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/314dec89b3219941707ad62ccc90e585/4/Q/4QM14AA-1_T1679068912.png")
		.brand("HP")
		.descrizioneArticolo(
			"HP 1000, Cablato, Sensore Preciso, 1200 DPI, 3 Pulsanti, Rotella Scorrimento, Cavo USB 1.5 m, Design Pratico e Versatile, Ambidestro - Nero")
		.build();

    }

    @Bean("Mouse3")
    @Scope("prototype")
    public Articoli Articolo3() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Cablato")
		.img("https://m.media-amazon.com/images/I/51oJkL1ySqL._AC_UF1000,1000_QL80_.jpg").brand("Ewent")
		.descrizioneArticolo(
			"Ewent EW3300 - Mouse ottico con cavo USB a 3 pulsanti, 1000 DPI, design ergonomico, ambidestro - ‎Nero")
		.build();

    }

    @Bean("Mouse4")
    @Scope("prototype")
    public Articoli Articolo4() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(9, 13)).nomeArticolo("Mouse Wireless")
		.img("https://www.picclickimg.com/PKoAAOSwFz9edjYp/TECKNET-PRO-Mouse-Senza-Fili-2600DPI-Durata-delle.webp")
		.brand("TECKNET PRO")
		.descrizioneArticolo(
			"Mouse Senza Fili, 2600 DPI, design ergonomico, 2,4G Mouse Ottico con Ricevitore Nano USB, 6 Pulsanti, Durata di Vita di 24 Mesi - Nero")
		.build();

    }

    @Bean("Mouse5")
    @Scope("prototype")
    public Articoli Articolo5() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(10, 20)).nomeArticolo("Mouse Cablato")
		.img("https://m.media-amazon.com/images/I/71Oy8CMWjJL._AC_UF1000,1000_QL80_.jpg").brand("Trust Verto")
		.descrizioneArticolo(
			"Mouse Verticale Cablato, design ergonomico, 1000/1600 DPI, Cavo USB 1,5 m, Illuminazione LED, 6 Pulsanti - Nero")
		.build();

    }

    @Bean("Mouse6")
    @Scope("prototype")
    public Articoli Articolo6() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(8, 15)).nomeArticolo("Mouse Wireless")
		.img("https://m.media-amazon.com/images/I/51CGX6Wr4NL._AC_UF1000,1000_QL80_.jpg").brand("Anmck")
		.descrizioneArticolo(
			"Design ergonomico, Clic Silenzioso, Ricaricabile, 3D USB Ottico 3 Livelli Regolabile Dpi, Leggero - Nero")
		.build();

    }

    @Bean("Mouse7")
    @Scope("prototype")
    public Articoli Articolo7() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://i.ebayimg.com/images/g/79cAAOSwbvVlise3/s-l1200.jpg").brand("Trust")
		.descrizioneArticolo(
			"Mouse Silenzioso con Design Sostenibile, 800-1600 DPI, Ambidestro, Microricevitore USB, Mouse Senza Fili - Nero")
		.build();

    }

    @Bean("Mouse8")
    @Scope("prototype")
    public Articoli Articolo8() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(10, 20)).nomeArticolo("Mouse Wireless")
		.img("https://m.media-amazon.com/images/I/61-GeOlhtlL._AC_UF1000,1000_QL80_.jpg").brand("Uiosmuph")
		.descrizioneArticolo("Bluetooth 5.0+2.4G Ricaricabile, Ottico, Piccolo, Portatile - Nero Opaco")
		.build();

    }

    @Bean("Mouse9")
    @Scope("prototype")
    public Articoli Articolo9() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.idealo.com/folder/Product/200766/2/200766268/s10_produktbild_max/glorious-pc-gaming-race-model-o-wireless.jpg")
		.brand("Glorious")
		.descrizioneArticolo(
			"Gaming Model O, Superleggero 69 g, design a nido d'ape, RGB, ambidestro, 2,4 GHz senza lag, fino a 71 ore di batteria - Nero opaco")
		.build();

    }

    @Bean("FakeOrdine")
    @Scope("prototype")
    public Ordine fakeOrdine() {
	int sum = fake.number().numberBetween(0, 4);
	LocalDate currentDate = LocalDate.now();
	LocalDate consegnaDate = currentDate.plusDays(3);
	return Ordine.builder().riepilogoOrdine(statoRiepilogoOrdine(sum)).dataOrdine(currentDate)
		.dataConsegna(consegnaDate).statoOrdine(getStatoOrdine(sum)).prezzoConsegna(2.99).build();
    }

    private StatoOrdine getStatoOrdine(int random) {
	StatoOrdine type = null;
	switch (random) {
	case 0 -> type = StatoOrdine.ANNULLATO;
	case 1 -> type = StatoOrdine.CONSEGNATO;
	case 2 -> type = StatoOrdine.IN_CONSEGNA;
	case 3 -> type = StatoOrdine.SPEDITO;
	}
	return type;
    }

    private String statoRiepilogoOrdine(int i) {
	String type = null;
	switch (getStatoOrdine(i)) {
	case ANNULLATO -> type = "L'ordine è stato annullato!";
	case SPEDITO -> type = "L'ordine è andato a buon fine! Sarà consegnato in data " + LocalDate.now().plusDays(3);
	case IN_CONSEGNA -> type = "Il tuo ordine si trova presso: " + "LAT : " + fake.address().latitude() + "° , "
		+ "LON: " + fake.address().longitude() + " °";
	case CONSEGNATO -> type = "Il tuo ordine è stato consegnato correttamente!";
	}
	return type;
    }

    @Bean("FakeCarrello")
    @Scope("prototype")
    public Carrello fakeCarrello() {
	return Carrello.builder().build();
    }
}
