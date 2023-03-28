class Carte{ 
    static reducere = 10;
    mypret;
    constructor(titlu, autor, editura, an_aparitie, nr_pagini) {
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        // this.pret = pret;
        this.nr_pagini = nr_pagini;
}
get pret(){
    console.log('sunt in getter')
    return this.mypret;
}
set pret(pretNou){
    console.log('sunt in setter');
    if (pretNou <= 0){
        throw 'Pretul nu poate fi actualizat';
    }
    else{ 
    this.mypret = pretNou;
    }
}
info(){
console.log(`Titlul este  ${this.titlu}, autor ${this.autor}, editura ${this.editura}`)
}

deschidCartea (pagina){
    console.log(`Am deschis cartea la pagina ${pagina}`);
}
// modificaPret (pretNou){
//     if(pretNou < 100 && pretNou > this.pret){
//         this.pret = pretNou;
//     }
    // else{
    //     this.reducere()
    // }
// }

// pretNou(){
//     this.pret = this.pret - (Carte.reducere * this.pret)/ 100
// }

// modificaPret(diferenta){
//     this.pret = this.pret - diferenta;

// }
// reducere(procent){
// this.pret = this.pret - (procent/100* this.pret)
// // this.pret -=(procent* this.pret)/100
// console.log(`pretul cu reducere este ${this.pret}`);
// }
}

