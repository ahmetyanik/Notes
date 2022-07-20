function topla(x: number, y: number): number {
  return x + y;
}

console.log(topla(2, 5));

function topla4(x: number, y: number = 4): number {
  return x + y;
}

console.log(topla4(3, 5));

function topla5(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

console.log(topla5(3, 40));


function davetEt(ilkDavetli:string,...digerleri:string[]):string{

    return ilkDavetli + " " + digerleri.join(" ");
}


console.log(davetEt("Engin","Ahmet","Mehmet"));

