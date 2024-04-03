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
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222589317713629286/M1-removebg-preview.png?ex=6616c407&is=66044f07&hm=5e9885dcc01907c0eb537b91e7c93c5c212e7193f9f78f0e90eb7cdafd6604f1&")
		.brand("Logitech")
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
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Cablato").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222589812943491165/M2-removebg-preview.png?ex=6616c47e&is=66044f7e&hm=531977b73760eff4075a1109baa401eb2082d8ae69893c509b18364b91b09328&")
		.brand("Ewent")
		.descrizioneArticolo(
			"Ewent EW3300 - Mouse ottico con cavo USB a 3 pulsanti, 1000 DPI, design ergonomico, ambidestro - ‎Nero")
		.build();

    }

    @Bean("Mouse4")
    @Scope("prototype")
    public Articoli Articolo4() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(9, 13)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222590371608006716/M3-removebg-preview.png?ex=6616c503&is=66045003&hm=3eb04c2b192c8d47aa0dfd2d4ef9c6ea2e2d39a26b9e2d4fa4823da619408e01&")
		.brand("TECKNET PRO")
		.descrizioneArticolo(
			"Mouse Senza Fili, 2600 DPI, design ergonomico, 2,4G Mouse Ottico con Ricevitore Nano USB, 6 Pulsanti, Durata di Vita di 24 Mesi - Nero")
		.build();

    }

    @Bean("Mouse5")
    @Scope("prototype")
    public Articoli Articolo5() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(10, 20)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222590705747234827/M4-removebg-preview.png?ex=6616c552&is=66045052&hm=f12216fd9fb4c63f19550fbd276789812f00685de5f118097c22157ad2835659&")
		.brand("Trust Verto")
		.descrizioneArticolo(
			"Mouse Verticale Cablato, design ergonomico, 1000/1600 DPI, Cavo USB 1,5 m, Illuminazione LED, 6 Pulsanti - Nero")
		.build();

    }

    @Bean("Mouse6")
    @Scope("prototype")
    public Articoli Articolo6() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(8, 15)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222591025453858846/M5-removebg-preview.png?ex=6616c59f&is=6604509f&hm=aebdf5822dbc8a5d8aabc515dc847cd5c25446e0ddb1849c93331b634c08c3b8&")
		.brand("Anmck")
		.descrizioneArticolo(
			"Design ergonomico, Clic Silenzioso, Ricaricabile, 3D USB Ottico 3 Livelli Regolabile Dpi, Leggero - Nero")
		.build();

    }

    @Bean("Mouse7")
    @Scope("prototype")
    public Articoli Articolo7() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222591333219176618/M6-removebg-preview.png?ex=6616c5e8&is=660450e8&hm=672a973cb7c3f901f85474ff1600a4c307660b04e1c1c06329ccdd205de42a53&")
		.brand("Trust")
		.descrizioneArticolo(
			"Mouse Silenzioso con Design Sostenibile, 800-1600 DPI, Ambidestro, Microricevitore USB, Mouse Senza Fili - Nero")
		.build();

    }

    @Bean("Mouse8")
    @Scope("prototype")
    public Articoli Articolo8() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(10, 20)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222591538886873098/M7-removebg-preview.png?ex=6616c619&is=66045119&hm=e90785735893f896e2aeb21bde8f66811cad1c9a12dd839b3775cdfdcb6be3b5&")
		.brand("Uiosmuph")
		.descrizioneArticolo("Bluetooth 5.0+2.4G Ricaricabile, Ottico, Piccolo, Portatile - Nero Opaco")
		.build();

    }

    @Bean("Mouse9")
    @Scope("prototype")
    public Articoli Articolo9() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(5, 10)).nomeArticolo("Mouse Wireless")
		.img("https://cdn.discordapp.com/attachments/1062713292226830409/1222591758970654720/M8-removebg-preview.png?ex=6616c64d&is=6604514d&hm=c066d37b30fd60f1670ec97d98a8c2576b224a9d20cb8d3d56733654bdf1314e&")
		.brand("Glorious")
		.descrizioneArticolo(
			"Gaming Model O, Superleggero 69 g, design a nido d'ape, RGB, ambidestro, 2,4 GHz senza lag, fino a 71 ore di batteria - Nero opaco")
		.build();

    }

    @Bean("Monitor1")
    @Scope("prototype")
    public Articoli Articolo10() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(90, 100)).nomeArticolo("Monitor").img(
		"https://media.discordapp.net/attachments/1062713292226830409/1222572386436644884/OK.png?ex=6616b443&is=66043f43&hm=e5f78c1241cf1717f73a7260407967ce7d49125279a89815526b0d6dbb44954d&=&format=webp&quality=lossless&width=536&height=437")
		.brand("KOORUI")
		.descrizioneArticolo(
			"24 pollici full HD, 75 Hz, 5 ms, Eye Comfort, gamma di colori sRGB 99%, (1920 x 1080, HDMI, VGA, inclinabile, VESA 75x75) - nero")
		.build();
    }

    @Bean("Monitor2")
    @Scope("prototype")
    public Articoli Articolo11() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(90, 100)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222586205888057404/m3-removebg-preview.png?ex=6616c122&is=66044c22&hm=04d6e53e3d5540c4de121f2fadb47350a689bd3a2a66ac8e63ea987ae081a8c7&")
		.brand("KOORUI")
		.descrizioneArticolo(
			"Monitor curvo per computer da 27 pollici - da gioco Full HD 1080P 75Hz Monitor LED 1800R HDMI VGA, cura degli occhi, regolazione dell'inclinazione - nero")
		.build();
    }

    @Bean("Monitor3")
    @Scope("prototype")
    public Articoli Articolo12() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(90, 100)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222586452471320669/M4-removebg-preview.png?ex=6616c15c&is=66044c5c&hm=3591c1c39c46f45caf8b00b09f7147c027cf5248dd816635121aa8a3d30176dd&")
		.brand("Philips")
		.descrizioneArticolo(
			" 241V8L Monitor 24\" LED VA Full HD, 1920 x 1080, Gaming Adaptive Sync, 75 Hz, HDMI, VGA, Attacco VESA, Nero ")
		.build();
    }

    @Bean("Monitor4")
    @Scope("prototype")
    public Articoli Articolo13() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(90, 100)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222586710580531281/M5-removebg-preview.png?ex=6616c19a&is=66044c9a&hm=92426e16ba2b03cfe1772ecf35b2d411108f03c2ef4560cf3b4acea7efd71018&")
		.brand("Samsung")
		.descrizioneArticolo(
			"S31C (S24C312), Flat, 24'', 1920x1080 (Full HD), IPS, 75 Hz, 5 ms, FreeSync, D-Sub, HDMI, Eye Saver Mode, Flicker Free - nero")
		.build();
    }

    @Bean("Monitor5")
    @Scope("prototype")
    public Articoli Articolo14() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(120, 180)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222586948053631027/M6-removebg-preview.png?ex=6616c1d2&is=66044cd2&hm=35e9877cfc5ddbee27c0c5a5d7d4d97a4dfd13c0d06249e0624c594dcfdba61d&")
		.brand("MSI")
		.descrizioneArticolo(
			"MSI PRO MP273A Monitor 27\" IPS FHD (1920x1080), 1ms, 100 Hz, Altoparlanti integrati, Schermo Eye-Friendly, VESA, PIVOT - HDMI 1.4, DP 1.2a - nero")
		.build();
    }

    @Bean("Monitor6")
    @Scope("prototype")
    public Articoli Articolo15() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(90, 100)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222587288958009354/M7-removebg-preview.png?ex=6616c224&is=66044d24&hm=0a5024094a179b579d94a6ba5ce4eddf88594c91bf0662a05309d54be108ae11&")
		.brand("Z-Edge")
		.descrizioneArticolo(
			"Gaming Curvo 24'' 180 Hz/165 Hz/144 Hz, 1ms MPRT, FreeSync, Schermo LED FHD(1920x1080) con DP Cavo, VA 1650R, 300cd/m², HDMI2.1& DP1.4, Inclinazione Regolabile, Altoparlanti Integrati - nero")
		.build();
    }

    @Bean("Monitor7")
    @Scope("prototype")
    public Articoli Articolo16() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(500, 700)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222587789657243708/M8-removebg-preview.png?ex=6616c29b&is=66044d9b&hm=de6e2176d619b95b68f81f5a59a809cbb45a815f92c25d32a6ee0dcc3e48890d&")
		.brand("Samsung")
		.descrizioneArticolo(
			"Gaming Odyssey G7 (C32G73), Curvo (1000R), 32\", 2560x1440 (WQHD 2K), HDR 600, VA, 240 Hz, 1 ms, FreeSync Pro, G-Sync, HDMI, USB 3.0, Display Port, Ingresso Audio, HAS, Pivot, PIP, PBP - nero")
		.build();
    }

    @Bean("Monitor8")
    @Scope("prototype")
    public Articoli Articolo17() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(1000, 1300)).nomeArticolo("Monitor").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222588071841628190/M9-removebg-preview.png?ex=6616c2de&is=66044dde&hm=04e5a564be90fd7757053e5b1beb552f43d1ca9c6f44432cf5bd9a90435ede78&")
		.brand("Samsung")
		.descrizioneArticolo(
			"Gaming Odyssey G9 (C49G93), Curvo (1000R), 49\", 5120x1440 (Dual QHD), 32:9, HDR10+, HDR1000, VA, 240 Hz, 1 ms, Freesync Pro, G-Sync, HDMI, USB 3.0, Display port, Ingresso Audio, HAS")
		.build();
    }

    @Bean("Monitor9")
    @Scope("prototype")
    public Articoli Articolo18() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(350, 500)).nomeArticolo("Monitor")
		.img(null).brand("MSI")
		.descrizioneArticolo(
			"Optix MAG274QRF-QD Monitor Gaming 27\" 16:9 (WQHD) 2560x1440, Rapid IPS Quantum Dot, 165Hz, 1ms GtG, HDR Ready, G-SYNC compatibile, Night Vision, USB Type-C, Gaming OSD App, VESA 100x100 - nero")
		.build();
    }

    @Bean("Keyboard1")
    @Scope("prototype")
    public Articoli Articolo19() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(60, 100)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222592242146082976/T1-removebg-preview.png?ex=6616c6c1&is=660451c1&hm=e7721a02ad5a699aedffda8acfa0806a71212650310ead948a4bfd803d2cc2d3&")
		.descrizioneArticolo(
			"Tastiera meccanica da gioco – 61 tasti multi colore RGB illuminato LED retroilluminato cablato programmabile per PC/Mac Gamer (Gateron ottico giallo, bianco)")
		.brand("GK61").build();
    }

    @Bean("Keyboard2")
    @Scope("prototype")
    public Articoli Articolo20() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(60, 100)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222594069063012382/T8-removebg-preview.png?ex=6616c874&is=66045374&hm=f92950318ebca2f804f7c62784fb3252095fa2348583bf65418055cbdf53b2a7&")
		.descrizioneArticolo(
			"tastiera da gioco meccanica al 65%,68 tasti con interruttori rossi lineari,tastiera meccanica cablata con retroilluminazione LED,tastiera ergonomica compatta per PS5/PS4/Xbox(68 Black-White) ")
		.brand("SOLIDEE").build();
    }

    @Bean("Keyboard3")
    @Scope("prototype")
    public Articoli Articolo21() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(20, 40)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222592417933561968/T2-removebg-preview.png?ex=6616c6eb&is=660451eb&hm=cdadca7348f24f4a3e0e92970e430e80e137044493489a64559bf2c76cfdfbd1&")
		.descrizioneArticolo(
			"Tastiera con cavo, 12 combinazioni di scelta rapida con tasto Fn, Tastiera Numerica, nera, 664R5AA")
		.brand("HP").build();
    }

    @Bean("Keyboard4")
    @Scope("prototype")
    public Articoli Articolo22() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(20, 30)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222592698372853791/T3-removebg-preview.png?ex=6616c72d&is=6604522d&hm=e96ab27ab3b9278e0905dfdda3cb7f6bfb75f49b53d1ec76be47406c49026025&")
		.descrizioneArticolo(
			"Logitech K120 Tastiera Cablata Business per Windows/Linux, USB, Tasti ‎Silenziosi, Anti Schizzi, Barra Spaziatrice Curva, ‎PC/Laptop, Layout Italiano ‎QWERTY")
		.brand("Logitech").build();
    }

    @Bean("Keyboard5")
    @Scope("prototype")
    public Articoli Articolo23() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(60, 100)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222592970864459867/T4-removebg-preview.png?ex=6616c76e&is=6604526e&hm=498a97e71e6a38c94cc277856f8d26567985ed26ef25a436d4dae026430d6e95&")
		.descrizioneArticolo(
			"Logitech G PRO TKL Tastiera Gaming Meccanica, GX Blue Clicky Switch, LIGHTSYNC RGB, Design Portatile Tenkeyless, Pensato per Esport Gaming, Micro Cavo USB Rimovibile, QWERTY ITA Layout, Nero")
		.brand("Logitech").build();
    }

    @Bean("Keyboard6")
    @Scope("prototype")
    public Articoli Articolo24() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(100, 120)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222593803123167412/T7-removebg-preview.png?ex=6616c835&is=66045335&hm=133f9695e7f0ccba539b5b1acee2aebc52f76d099efa8ed51fe1c09de3379d5e&")
		.descrizioneArticolo(
			"miniSTREAK Tastiera da Gioco Pro Esports Meccanica RGB Retroilluminata a LED Interruttori Cherry MX Silent Red Layout Tenkeyless Portatile Piccolo e Compatto (US Layout, QWERTY)")
		.brand("Fnatic").build();
    }

    @Bean("Keyboard7")
    @Scope("prototype")
    public Articoli Articolo25() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(60, 100)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222593159435911228/T5-removebg-preview.png?ex=6616c79b&is=6604529b&hm=209e77ff4c624d7ff13ae77830237605b7f1476b28aef90c3eff8f57d6e8b0b6&")
		.descrizioneArticolo(
			"Logitech G G715 Tastiera Gaming Wireless con Luce RGB LIGHTSYNC, Velocità Della LUCE, Tactile Switch (Marrone GX) e Supporto Per Tastiera, Compatibile con PC e Mac - Bianco, QWERTY ")
		.brand("Logitech").build();
    }

    @Bean("Keyboard8")
    @Scope("prototype")
    public Articoli Articolo26() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(100, 200)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222593606364168192/T6-removebg-preview.png?ex=6616c806&is=66045306&hm=9e19ee936d4dcb217faa2183287d1e1b0c35d91e111117079d4d6eebea104f50&")
		.descrizioneArticolo(
			"STREAK65 LP Blanca | Tastiera Meccanica da Gioco a Basso Profilo, Copritasti PBT Doubleshot Speed Switch Fnatic, Layout 65% (60 65 percento) Tastiera Esports RGB compatta (ISO, QWERTY) ")
		.brand("FNATIC").build();
    }

    @Bean("Keyboard9")
    @Scope("prototype")
    public Articoli Articolo27() {
	return Articoli.builder().prezzo((double) fake.number().numberBetween(100, 300)).nomeArticolo("Keyboard").img(
		"https://cdn.discordapp.com/attachments/1062713292226830409/1222594620316188772/T9-removebg-preview.png?ex=6616c8f8&is=660453f8&hm=bf4d4bbc41742dc30284cea96f371f515bfbb5f1cf90b6b6d2afdac6a1adde94&")
		.descrizioneArticolo(
			"K100 AIR WIRELESS RGB Tastiera Meccanica da Gioco Sottile - Tastiere a Basso Profilo CHERRY MX - Bluetooth - Compatibile con iCUE - PC, Mac, PS5, PS4, Xbox - QWERTY IT - Nero ")
		.brand("Corsair").build();
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
