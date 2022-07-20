function greeter(isim: string) {
  return "Merhaba " + isim;
}

let selam = greeter("Ahmet");

console.log(selam);

let sayi: number;

sayi = 10;
sayi = 10.4;



let dogruMu: boolean;

dogruMu = false;
dogruMu = true;



let sayilar : number[] = [1,2,3];

let sayilar2 : Array<number> = [1,2,3];

let musteri : string[] = ["ahmet","mehmet"];


let dizi : [number,string] = [2,"ankara"];

enum Renk {Kirmizi=1,Siyah,Mavi}

let renk : Renk = Renk.Kirmizi
let siyah : Renk = Renk.Siyah

console.log(siyah);


let notSure : any = "Ankara";
notSure = 2;


let deger2 : void = undefined;

let sehir = null;





console.log("sehir",sehir);


