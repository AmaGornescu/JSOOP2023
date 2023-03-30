class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0; // proprietate statica si protected = daca e deinitita ia valoarea, altfel ia 0. E o expresie care o sa returneze true sau false
        Person._amount++; //incrementeaza cu 1
    }

    static get amount() { //getter static
        return Person._amount; //returneaza o proprietate statica
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) { //regex    \s=spatiu
            [this.firstName, this.lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }

    learn(skill) {
        this.skills.push(skill);
    }
}

export {Person}