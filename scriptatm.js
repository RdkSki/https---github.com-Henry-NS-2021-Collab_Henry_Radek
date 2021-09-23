function atm(m){
    let a =  Math.floor(m/100);
    let hun = m - (a*100);
    let b = Math.floor(hun/50);
    let fif = hun - (b*50);
    let c = Math.floor(fif/20);
    let twe = fif - (c*20);
    let d = Math.floor(twe/10);
    let e = a*100 + b*50 + c*20 + d*10;
    return `you recieve ${a} 100€ notes, ${b} 50€ notes, ${c} 20€ notes and ${d} 10€ notes. Total amount: ${e} €`;
}

let result = atm(790);
console.log(result);
