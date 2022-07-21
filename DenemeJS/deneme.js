/* # Test - Programmiergrundlagen

## Test Anweisungen 
* Arbeite von der `index.js` Datei aus, die du mit dem Starter-Code erhalten hast.
* Folge allen Anweisungen unten, um den Test zu absolvieren. 
* *Wichtig*: Stell sicher, dass die Namen der Variablen und Funktionen denen der Anweisungen (also die englischen) entsprechen. 
* Der Test wird automatisch ausgewertet. Das funktioniert nur, wenn die erwarteten Variablen und Funktionsnamen *und Ausgaben* gefunden werden.
* In der Übersetzung schreibe ich in Klammern (de: deutsche Bedeutung) dahinter.
* Seht euch diese Datei nicht als Text-Datei an, sondern auf einer Oberfläche die Markdown interpretiert (GitHub oder die Vorschau in Visual Studio Code). 
* Markdown-Code zur Formatierung *gehört nicht* zu den geforderten Namen von Funktionen und Ergebnissen.

* Alle Funktionen sollen Rückgabewerte haben, vergiss das `return` nicht.
* Gib aber zusätzlich die Lösungen auch auf der Konsole mit `console.log(Funktionsaufruf(Argumente));` aus, um deinen Code zu testen.

* Viel Glück!

### Bedingte Algorithmen 

#### 1. Los oder New?
* Schreibe eine Funktion "nameOfCity" (de: nameEinerStadt), die eine Stadt als Zeichenkette als Argument nimmt.
* Wenn die Kette mit "Los" oder "New" beginnt, gib den Namen der Stadt auf der Konsole aus und gib `true` zurück.
* Wenn nicht, dann gib "The city name does not begin with Los or New" (de: Die Stadt beginnt nicht mit Los oder New) auf der Konsole aus und gib `false` zurück.
* Die Schreibweise (groß/klein) von Buchstaben, soll unwichtig sein (los = Los, new = NEW, u.s.w.) */


 function nameOfCity(city){


  if(city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")){

    console.log(true);
    return true;
  }else{

    console.log("The city name does not begin with Los or New");
    return false;
  }

 }

 nameOfCity("los angeles")
 nameOfCity("new york")
 nameOfCity("berlin")



/*

#### 2. ist teilbar durch?
* Schreibe eine Funktion "isDivisible" (de: istTeilbar), die eine ganze Zahl als Argument nimmt. 
* Wenn die Zahl durch 100 teilbar ist, gib `true` zurück; Wenn nicht, gib `false` zurück.
*Beispiele*: 1 ➞ false, 1000 ➞ true, 100 ➞ true.

#### 3. Der fehlende Winkel
* Schreibe eine Funktion "missingAngle" (de: fehlenderWinkel), die zwei Zahlen als Argumente nimmt.
* Die zahlen sollen zwei bekannte Winkel in einem Dreieck sein.
* Den fehldenden Winkel musst du selbst ausrechnen.
* Für den fehlenden Winkel in dem Dreieck, soll die Funktion auswerten ob er spitz, recht, oder flach ist.
* Damit die automatische Testauswertung funktioniert, musst du die englischen Worte *genau so* zurück geben, wie hier angegeben. 
* (Es gehören keine Unterstriche in die Rückgabe, die gehören zum Markdown-code der README.md, um den Text schräg darzustellen)

*Hinweis*: Ein acute angle (de: spitzer Winkel) ist kleiner als 90°, ein right angle (de: rechter Winkel) ist exakt 90° und ein obtuse angle (de: flacher Winkel) ist größer als 90° (aber kleiner als 180°)

 *Beispiele*: 
- 11°, 20° soll "obtuse" (de: flach) liefern, denn der fehlende Winkel ist 149° 
- 27°, 59° ➞ der dritte Winkel ist 92° und damit "obtuse" (de: flach)
- 135°, 11° ➞ der dritte Winkel ist "acute" (de: spitz) 
- 45°, 45° ➞ der dritte Winkel ist ein "right angle" (de: rechter Winkel)

#### 4. Wie ist das Wetter?
* Benutze den ternären Operator für diese Aufgabe.
* Schreib eine Funktion "isRaining" (de: esRegnet), die einen Wahrheitswert nimmt.
* Bei true, gib zurück "wet day - you need an umbrella!" (de: nasser Tag - du brauchst einen Schirm)
* Bei false, gib zurück "dry day - leave your umbrella at home!" (de: trockener Tag - lass deinen Schirm zu Hause)


*/


function isRaining(wert){

  console.log(wert ? "wet day - you need an umbrella!" :"dry day - leave your umbrella at home!" );

  return wert ? "wet day - you need an umbrella!" :"dry day - leave your umbrella at home!";

}

isRaining(false)



/*

### Schleifen (engl. Loops) 

Die automatischen Tests kann man hier austricksen.
Wenn Ihr keine Schleifen verwendet um die Rückgaben zu erzeugen, ziehen wir die Punkte manuell wieder ab :)

Beachtet, dass nach dem letzten Wert der Sequenzen kein weiteres Leerzeichen kommt.

#### 1. Sequenzen
* Erstelle eine Funktion "geometricalSequence" (de: geometrischeSequenz).
* Verwende eine Schleife, um die folgende Sequenz zu erzeugen: `1 2 4 8 16 32 64 128 256`.
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück. */



function geometricalSequence(num){

  let start = 1;

  for(let i=1;i<9;i++){

    start += ` ${Math.pow(num,i)}`

  }

  console.log(start);

}

geometricalSequence(2)


/*

#### 2. Vielfache
* Schreibe eine Funktion namens "multiplesOfThree" (de: VielfacheVonDrei)
* Verwende eine Schleife, um die ersten fünf Vielfachen von Drei auszugeben: `3 6 9 12 15`
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück.

*/

  function multiplesOfThree(num){

    let nums = "";

    for(let i=1;i<=5;i++){

      nums += `${num*i} `

    }

    console.log(nums);

  }

    multiplesOfThree(3)


/*

### Mathe 

#### 1. Du bist sehr Potent!
* Schreibe eine Funktion "powerOf" (de: PotenzVon), welche eine ganze Zahl als Argument nimmt.
* Sie soll die Potenz der Zahl mit sich selbst zurückgeben ( Zahl hoch Zahl ).
* Du solltest eine Methode des Math Objektes verwenden, um die Berechnung zu machen.

*Beispiele*:
- javascript 
    powerOf(3); //27
    

- javascript 
    powerOf(4); //256

    */

  function powerOf(num){

    console.log(Math.pow(num,num));

  }

  powerOf(4)


    /*
    

### Probleme lösen 

#### 1. Wie viele Vokale?
* Schreibe eine Funktion "vowelCount" (de: vokalAnzahl), die eine Zeichenkette als Argument nimmt.
* Zähle wie viele Vokale die Zeichenkette enthält und gib die Anzahl als Rückgabewert zurück.
* [Vokale](https://de.wikipedia.org/wiki/Vokal) (auch "Selbstlaut") sind die folgenden Buchstaben: a, e, i, o, u

*Beispiele*: 
- javascript
  vowelCount("hello"); // 2
  
- javascript
  vowelCount("test"); // 1
  
- javascript
  vowelCount("fbw"); // 0 */


  function vowelCount(text){

    let vowelCounter=0;

    for(let i=0;i<text.length;i++){

      if(text[i]==="a" || text[i]==="e" || text[i]==="i" || text[i]==="u" || text[i]==="ü" || text[i]==="o" || text[i]==="ö" || text[i]==="i"){

        vowelCounter++;
      }
    }

    console.log(vowelCounter);


  }

  vowelCount("fbw")