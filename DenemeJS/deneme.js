/* Aufgabe 3: (Sachaufgabe)
Teil 1:
Du bist für die Implementierung eines Warenkorb-Systems zuständig. Ziel ist es dem Nutzer des Onlineshops das teuerste Produkt, das günstigste Produkt und die Gesamtkosten für alle Produkte anzuzeigen.
Schreibe einen Algorithmus der für folgenden Input:
const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme","Tofu", "Müsli", "Toaster", "Kaugummi"];
Folgenden Output auf der Konsole anzeigt:
"Das teuerste Produkt ist: Toaster"
"Das billigste Produkt ist: Kaugummi"
"Alle 5 Produkte zusammen kosten: 82,55€"
Info: Runde alle Preise auf zwei Nachkommastellen.


Bonus:
Jetzt besteht der input aus drei Arrays. Zusätzlich zu den Preisen und den Produktnamen kommt jetzt noch ein Array amounts mit der Anzahl der jeweiligen Produkte.
const amounts = [4, 1, 2, 1, 3];
Die Zahncreme wird also 4 mal gekauft. Der Tofu 1 mal und so weiter.
Passe den Output von oben an sodass die Gesamtanzahl an Produkten und der Gesamtpreis stimmen.  */

const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme", "Tofu", "Müsli", "Toaster", "Kaugummi"];

const yeniStringMax = Math.max(...cost);

console.log(`Das teuerste Produkt ist: ${yeniStringMax} `);
console.log(
  `Das teuerste Produkt ist: ${productNames[cost.indexOf(yeniStringMax)]} `
);

const yeniStringMin = Math.min(...cost);

console.log(`Das billigste Produkt ist: ${yeniStringMin} `);
console.log(
  `Das billigste Produkt ist: ${productNames[cost.indexOf(yeniStringMin)]} `
);

let totalPrice = 0;

for (let i = 0; i < cost.length; i++) {
  totalPrice += cost[i];
}

console.log(`Alle 5 Produkte zusammen kosten: ${totalPrice.toFixed(2)}`);

/*************************Bonus********************************/

const amounts = [4, 1, 2, 1, 3];

let totalAmount = 0;
let totalPriceByAmount = 0;

for (let i = 0; i < cost.length; i++) {
  totalAmount += amounts[i];
  totalPriceByAmount += cost[i] * amounts[i];
}

console.log("totalAmount:", totalAmount);
console.log("totalPriceByAmount:", totalPriceByAmount);
