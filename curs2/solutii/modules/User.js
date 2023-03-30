export class User{
    _varsta; //protected
#email; //privat
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta;
    }
get email(){
    console.log('Sunt in getter email')
    return this.#email;
}
set email(newEmail){
    console.log('Sunt in setter email')
    if(newEmail == 'dan@dan.ro'){
        this.#email = newEmail;

    }
    else{
            throw 'ERROR: invalid data!'
        
        }
    }
    
    get myAge(){
        return this._varsta;
    }
    set myAge(varstaNoua){
        if(varstaNoua>0){
            this._varsta = varstaNoua;
        }
        else{
            throw 'ERROR: invalid data!'
            // console.error("Error")
        }
    }
    mananca (calorii){
        console.log(`Mananca ${calorii} calorii pe zi. Adresa lui de email este ${this.#email}`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
// class Demo{

// }
// export {User, Demo}
// Daca aveam 2 clase puneam export doar jos
