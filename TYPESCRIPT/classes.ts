class Ev {
  odaSayisi: number;
  pencereSayisi: number;
  kat: number;

  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this.odaSayisi = odaSayisi;
    this.kat = kat;
    this.pencereSayisi = pencereSayisi;
  }

  yemekYe() {
    console.log(this.kat + " katli evde yemek yenildi!");
  }
}

let ev = new Ev(3, 4, 5);

console.log(ev.kat);
ev.yemekYe();

class Kisi {
  private _isim: string;

  get isim(): string {
    return "Sayin:" + this._isim;
  }

  set isim(ad: string) {
    this._isim = ad;
  }

  kaydet() {
    console.log("Kisi kaydedildi...");
  }
}

class Musteri extends Kisi {
  satisYap() {
    console.log("Satis yapildi...");
  }
}

class Personel extends Kisi {
  maasOde() {
    console.log("Maas ödendi...");
  }
}

let musteri = new Musteri();

musteri.kaydet();
musteri.satisYap();

let personel = new Personel();

personel.kaydet();
personel.maasOde();

musteri.isim = "Ahmet"
console.log(musteri.isim);
