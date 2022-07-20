function greeter(isim) {
    return "Merhaba " + isim;
}
var selam = greeter("Ahmet");
console.log(selam);
var sayi;
sayi = 10;
sayi = 10.4;
var dogruMu;
dogruMu = false;
dogruMu = true;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var musteri = ["ahmet", "mehmet"];
var dizi = [2, "ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var siyah = Renk.Siyah;
console.log(siyah);
var notSure = "Ankara";
notSure = 2;
var deger2 = undefined;
var sehir = null;
console.log("sehir", sehir);
