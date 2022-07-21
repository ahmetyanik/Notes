abstract class KrediBase {
    
  constructor() {}

  kaydet(): void {
    console.log("Kaydedildi...");
  }

  abstract hesapla(): void;
}

class TuketiciKredi extends KrediBase {
  constructor() {
    super();
  }

  hesapla(): void {
    console.log("Tüketici kredisine göre hesap yapildi...");
  }
}

class KonutKredi extends KrediBase {
 

  hesapla(): void {
    console.log("Konut kredisine göre hesap yapildi...");
  }

  baskaBirIslem(): void {
    console.log("Baska bir islem");
  }
}

let tuketiciKredisi = new TuketiciKredi();

tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let konutKredisi = new KonutKredi();

konutKredisi.hesapla();
konutKredisi.kaydet();
konutKredisi.baskaBirIslem();
