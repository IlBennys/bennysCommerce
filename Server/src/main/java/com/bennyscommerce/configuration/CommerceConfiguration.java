package com.bennyscommerce.configuration;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/RVddfsCh/M1-removebg-preview.png").brand("Logitech")
		.descrizioneArticolo(
			"Logitech M185, 2,4 GHz con Mini Ricevitore USB, Durata Batteria di 12 Mesi, Tracciamento Ottico 1000 DPI, Ambidestro - Grigio")

		.build();
    }

    @Bean("Mouse2")
    @Scope("prototype")
    public Articoli Articolo2() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 5, 10)).nomeArticolo("Mouse Cablato")
		.img("https://i.postimg.cc/L4zN44rz/4-QM14-AA-1-T1679068912.webp").brand("HP")
		.descrizioneArticolo(
			"HP 1000, Cablato, Sensore Preciso, 1200 DPI, 3 Pulsanti, Rotella Scorrimento, Cavo USB 1.5 m, Design Pratico e Versatile, Ambidestro - Nero")
		.build();

    }

    @Bean("Mouse3")
    @Scope("prototype")
    public Articoli Articolo3() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 5, 10)).nomeArticolo("Mouse Cablato")
		.img("https://i.postimg.cc/q7Px0Wwb/M2-removebg-preview.png").brand("Ewent")
		.descrizioneArticolo(
			"Ewent EW3300 - Mouse ottico con cavo USB a 3 pulsanti, 1000 DPI, design ergonomico, ambidestro - ‎Nero")
		.build();

    }

    @Bean("Mouse4")
    @Scope("prototype")
    public Articoli Articolo4() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 9, 13)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/fRFxj1Gz/Mouse3-removebg-preview.png").brand("TECKNET PRO")
		.descrizioneArticolo(
			"Mouse Senza Fili, 2600 DPI, design ergonomico, 2,4G Mouse Ottico con Ricevitore Nano USB, 6 Pulsanti, Durata di Vita di 24 Mesi - Nero")
		.build();

    }

    @Bean("Mouse5")
    @Scope("prototype")
    public Articoli Articolo5() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 10, 20)).nomeArticolo("Mouse Cablato")
		.img("https://i.postimg.cc/zfbFsqCH/M4-removebg-preview.png").brand("Trust Verto")
		.descrizioneArticolo(
			"Mouse Verticale Cablato, design ergonomico, 1000/1600 DPI, Cavo USB 1,5 m, Illuminazione LED, 6 Pulsanti - Nero")
		.build();

    }

    @Bean("Mouse6")
    @Scope("prototype")
    public Articoli Articolo6() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 8, 15)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/CLSJRTg9/M5-removebg-preview.png").brand("Anmck")
		.descrizioneArticolo(
			"Design ergonomico, Clic Silenzioso, Ricaricabile, 3D USB Ottico 3 Livelli Regolabile Dpi, Leggero - Nero")
		.build();

    }

    @Bean("Mouse7")
    @Scope("prototype")
    public Articoli Articolo7() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/2SXx91Zf/M6-removebg-preview.png").brand("Trust")
		.descrizioneArticolo(
			"Mouse Silenzioso con Design Sostenibile, 800-1600 DPI, Ambidestro, Microricevitore USB, Mouse Senza Fili - Nero")
		.build();

    }

    @Bean("Mouse8")
    @Scope("prototype")
    public Articoli Articolo8() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 10, 20)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/3xwBZXWB/M7-removebg-preview.png").brand("Uiosmuph")
		.descrizioneArticolo("Bluetooth 5.0+2.4G Ricaricabile, Ottico, Piccolo, Portatile - Nero Opaco")
		.build();

    }

    @Bean("Mouse9")
    @Scope("prototype")
    public Articoli Articolo9() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://i.postimg.cc/ZR6FqjDT/M8-removebg-preview.png").brand("Glorious")
		.descrizioneArticolo(
			"Gaming Model O, Superleggero 69 g, design a nido d'ape, RGB, ambidestro, 2,4 GHz senza lag, fino a 71 ore di batteria - Nero opaco")
		.build();

    }

    @Bean("Monitor1")
    @Scope("prototype")
    public Articoli Articolo10() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 90, 100)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/6q0rrqXg/M1-removebg-preview1.png").brand("KOORUI")
		.descrizioneArticolo(
			"24 pollici full HD, 75 Hz, 5 ms, Eye Comfort, gamma di colori sRGB 99%, (1920 x 1080, HDMI, VGA, inclinabile, VESA 75x75) - nero")
		.build();
    }

    @Bean("Monitor2")
    @Scope("prototype")
    public Articoli Articolo11() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 90, 100)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/4yZvHtrp/M3-removebg-preview.png").brand("KOORUI")
		.descrizioneArticolo(
			"Monitor curvo per computer da 27 pollici - da gioco Full HD 1080P 75Hz Monitor LED 1800R HDMI VGA, cura degli occhi, regolazione dell'inclinazione - nero")
		.build();
    }

    @Bean("Monitor3")
    @Scope("prototype")
    public Articoli Articolo12() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 90, 100)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/WbN62Gmv/Monitor4-removebg-preview.png").brand("Philips")
		.descrizioneArticolo(
			" 241V8L Monitor 24\" LED VA Full HD, 1920 x 1080, Gaming Adaptive Sync, 75 Hz, HDMI, VGA, Attacco VESA, Nero ")
		.build();
    }

    @Bean("Monitor4")
    @Scope("prototype")
    public Articoli Articolo13() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 90, 100)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/SNgLjnVz/Monitor5-removebg-preview.png").brand("Samsung")
		.descrizioneArticolo(
			"S31C (S24C312), Flat, 24'', 1920x1080 (Full HD), IPS, 75 Hz, 5 ms, FreeSync, D-Sub, HDMI, Eye Saver Mode, Flicker Free - nero")
		.build();
    }

    @Bean("Monitor5")
    @Scope("prototype")
    public Articoli Articolo14() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 120, 180)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/9XtY587b/Monitor6-removebg-preview.png").brand("MSI")
		.descrizioneArticolo(
			"MSI PRO MP273A Monitor 27\" IPS FHD (1920x1080), 1ms, 100 Hz, Altoparlanti integrati, Schermo Eye-Friendly, VESA, PIVOT - HDMI 1.4, DP 1.2a - nero")
		.build();
    }

    @Bean("Monitor6")
    @Scope("prototype")
    public Articoli Articolo15() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 90, 100)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/VvDtSh9c/Monitor7-removebg-preview.png").brand("Z-Edge")
		.descrizioneArticolo(
			"Gaming Curvo 24'' 180 Hz/165 Hz/144 Hz, 1ms MPRT, FreeSync, Schermo LED FHD(1920x1080) con DP Cavo, VA 1650R, 300cd/m², HDMI2.1& DP1.4, Inclinazione Regolabile, Altoparlanti Integrati - nero")
		.build();
    }

    @Bean("Monitor7")
    @Scope("prototype")
    public Articoli Articolo16() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 500, 700)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/FRX3w3Fw/Monitor8-removebg-preview.png").brand("Samsung")
		.descrizioneArticolo(
			"Gaming Odyssey G7 (C32G73), Curvo (1000R), 32\", 2560x1440 (WQHD 2K), HDR 600, VA, 240 Hz, 1 ms, FreeSync Pro, G-Sync, HDMI, USB 3.0, Display Port, Ingresso Audio, HAS, Pivot, PIP, PBP - nero")
		.build();
    }

    @Bean("Monitor8")
    @Scope("prototype")
    public Articoli Articolo17() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 1000, 1300)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/fRkcdMgq/Monitor9-removebg-preview.png").brand("Samsung")
		.descrizioneArticolo(
			"Gaming Odyssey G9 (C49G93), Curvo (1000R), 49\", 5120x1440 (Dual QHD), 32:9, HDR10+, HDR1000, VA, 240 Hz, 1 ms, Freesync Pro, G-Sync, HDMI, USB 3.0, Display port, Ingresso Audio, HAS")
		.build();
    }

    @Bean("Monitor9")
    @Scope("prototype")
    public Articoli Articolo18() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 350, 500)).nomeArticolo("Monitor")
		.img("https://i.postimg.cc/hj8Tnvfv/Monitor10-removebg-preview.png").brand("MSI")
		.descrizioneArticolo(
			"Optix MAG274QRF-QD Monitor Gaming 27\" 16:9 (WQHD) 2560x1440, Rapid IPS Quantum Dot, 165Hz, 1ms GtG, HDR Ready, G-SYNC compatibile, Night Vision, USB Type-C, Gaming OSD App, VESA 100x100 - nero")
		.build();
    }

    @Bean("Keyboard1")
    @Scope("prototype")
    public Articoli Articolo19() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 60, 100)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/289vrP8Q/T1-removebg-preview.png")
		.descrizioneArticolo(
			"Tastiera meccanica da gioco – 61 tasti multi colore RGB illuminato LED retroilluminato cablato programmabile per PC/Mac Gamer (Gateron ottico giallo, bianco)")
		.brand("GK61").build();
    }

    @Bean("Keyboard2")
    @Scope("prototype")
    public Articoli Articolo20() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 60, 100)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/DwWGZB8t/T8-removebg-preview.png")
		.descrizioneArticolo(
			"tastiera da gioco meccanica al 65%,68 tasti con interruttori rossi lineari,tastiera meccanica cablata con retroilluminazione LED,tastiera ergonomica compatta per PS5/PS4/Xbox(68 Black-White) ")
		.brand("SOLIDEE").build();
    }

    @Bean("Keyboard3")
    @Scope("prototype")
    public Articoli Articolo21() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 20, 40)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/L5Hf8S1T/T2-removebg-preview.png")
		.descrizioneArticolo(
			"Tastiera con cavo, 12 combinazioni di scelta rapida con tasto Fn, Tastiera Numerica, nera, 664R5AA")
		.brand("HP").build();
    }

    @Bean("Keyboard4")
    @Scope("prototype")
    public Articoli Articolo22() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 20, 30)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/CKqbvm0j/T3-removebg-preview.png")
		.descrizioneArticolo(
			"Logitech K120 Tastiera Cablata Business per Windows/Linux, USB, Tasti ‎Silenziosi, Anti Schizzi, Barra Spaziatrice Curva, ‎PC/Laptop, Layout Italiano ‎QWERTY")
		.brand("Logitech").build();
    }

    @Bean("Keyboard5")
    @Scope("prototype")
    public Articoli Articolo23() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 60, 100)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/xjRMFXwF/T4-removebg-preview.png")
		.descrizioneArticolo(
			"Logitech G PRO TKL Tastiera Gaming Meccanica, GX Blue Clicky Switch, LIGHTSYNC RGB, Design Portatile Tenkeyless, Pensato per Esport Gaming, Micro Cavo USB Rimovibile, QWERTY ITA Layout, Nero")
		.brand("Logitech").build();
    }

    @Bean("Keyboard6")
    @Scope("prototype")
    public Articoli Articolo24() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 100, 120)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/1tSVvSJQ/T7-removebg-preview.png")
		.descrizioneArticolo(
			"miniSTREAK Tastiera da Gioco Pro Esports Meccanica RGB Retroilluminata a LED Interruttori Cherry MX Silent Red Layout Tenkeyless Portatile Piccolo e Compatto (US Layout, QWERTY)")
		.brand("Fnatic").build();
    }

    @Bean("Keyboard7")
    @Scope("prototype")
    public Articoli Articolo25() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 60, 100)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/ZK5pkTZY/T5-removebg-preview.png")
		.descrizioneArticolo(
			"Logitech G G715 Tastiera Gaming Wireless con Luce RGB LIGHTSYNC, Velocità Della LUCE, Tactile Switch (Marrone GX) e Supporto Per Tastiera, Compatibile con PC e Mac - Bianco, QWERTY ")
		.brand("Logitech").build();
    }

    @Bean("Keyboard8")
    @Scope("prototype")
    public Articoli Articolo26() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 100, 200)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/289vrP8Q/T1-removebg-preview.png")
		.descrizioneArticolo(
			"STREAK65 LP | Tastiera Meccanica da Gioco a Basso Profilo, Copritasti PBT Doubleshot Speed Switch Fnatic, Layout 65% (60 65 percento) Tastiera Esports RGB compatta (ISO, QWERTY) - Bianca")
		.brand("FNATIC").build();
    }

    @Bean("Keyboard9")
    @Scope("prototype")
    public Articoli Articolo27() {
	return Articoli.builder().prezzo(fake.number().randomDouble(2, 100, 300)).nomeArticolo("Keyboard")
		.img("https://i.postimg.cc/pdznQrQC/T9-removebg-preview.png")
		.descrizioneArticolo(
			"K100 AIR WIRELESS RGB Tastiera Meccanica da Gioco Sottile - Tastiere a Basso Profilo CHERRY MX - Bluetooth - Compatibile con iCUE - PC, Mac, PS5, PS4, Xbox - QWERTY IT - Nero ")
		.brand("Corsair").build();
    }

    @Bean("FakeOrdine")
    @Scope("prototype")
    public Ordine fakeOrdine() {
	int sum = fake.number().numberBetween(0, 4);
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy").withLocale(Locale.ITALY);
	LocalDate currentDate = LocalDate.now();
	LocalDate consegnaDate = currentDate.plusDays(3);
	String currentDateFormattata = currentDate.format(formatter);
	String consegnaDateFormattata = consegnaDate.format(formatter);
	return Ordine.builder().riepilogoOrdine(statoRiepilogoOrdine(currentDateFormattata, consegnaDateFormattata))
		.dataOrdine(currentDateFormattata).dataConsegna(consegnaDateFormattata)
		.statoOrdine(getStatoOrdine(currentDateFormattata, consegnaDateFormattata)).prezzoConsegna(2.99)
		.build();
    }

    private StatoOrdine getStatoOrdine(String dataOrdine, String dataConsegna) {
	StatoOrdine type = null;
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy").withLocale(Locale.ITALY);
	LocalDate dataOrdineLocal = LocalDate.parse(dataOrdine, formatter);
	LocalDate dataOdierna = LocalDate.now();

	int giornoOrdine = dataOrdineLocal.getDayOfMonth();
	int giornoOdierno = dataOdierna.getDayOfMonth();

	if (giornoOrdine == giornoOdierno) {
	    type = StatoOrdine.SPEDITO;
	} else if (giornoOrdine == giornoOdierno + 1 || giornoOrdine == giornoOdierno + 2) {
	    type = StatoOrdine.IN_CONSEGNA;
	} else if (giornoOrdine == giornoOdierno + 3) {
	    type = StatoOrdine.CONSEGNATO;
	}

	return type;
    }

    private String statoRiepilogoOrdine(String dataOrdine, String dataConsegna) {
	String type = null;
	StatoOrdine statoOrdine = getStatoOrdine(dataOrdine, dataConsegna);

	if (statoOrdine != null) {
	    switch (statoOrdine) {
	    case SPEDITO:
		type = "L'ordine è andato a buon fine! Sarà consegnato in data " + dataConsegna;
		break;
	    case IN_CONSEGNA:
		type = "Il tuo ordine si trova in consegna presso: LAT : " + fake.address().latitude() + "° , LON: "
			+ fake.address().longitude() + " °";
		break;
	    case CONSEGNATO:
		type = "Il tuo ordine è stato consegnato correttamente!";
		break;
	    default:
		break;
	    }
	} else {
	    type = "Impossibile recuperare lo stato dell'ordine.";
	}

	return type;
    }

    @Bean("FakeCarrello")
    @Scope("prototype")
    public Carrello fakeCarrello() {
	return Carrello.builder().build();
    }
}
