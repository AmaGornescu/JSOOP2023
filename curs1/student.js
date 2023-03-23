class Student{ 
    constructor(id, nume, varsta, nota1, nota2){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        this.nota1 = nota1;
        this.nota2 = nota2;
        
}
salut(){
    console.log(`Salut`)
}
examen(nota1, nota2){
   this.nota1 = nota1; 
   this.nota2= nota2;
}
calMedia(nota1, nota2){
    rezultat = (this.nota1 + this.nota2)/2
    console.log(rezultat)
    
}
}