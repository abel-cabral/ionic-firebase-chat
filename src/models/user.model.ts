import { FirebaseDatabase } from "angularfire2";

//Estou criando uma classe user para facilitar a ciracao do meu objeto User de maneira mais clara
export class User{
    //No construtor passamos o que será passivel de alteracao na classe
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string,
        public key,
    ){}

}

//importe onde vc for usar essa classe