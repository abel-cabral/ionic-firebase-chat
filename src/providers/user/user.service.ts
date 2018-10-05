import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user.model';


@Injectable()
export class UserService {
  //Coloco o caminho no Firebase que eu pretendo usar
  private PATH: string = 'users/';
  
  constructor(
    //importamos nosso modulo do firebase para podermos usar seus serviço aqui
    private db: AngularFireDatabase,
    public http: HttpClient,
    ){}

    save(user: User) {
      return new Promise((resolve, reject) => {
        if (user.key) {
          this.db.list(this.PATH)
            .update(user.key, user)
            .then(() => resolve())
            .catch((e) => reject(e));
        } else {
          //Se não existir cria com esses parametros
          this.db.list(this.PATH)
            //Significa que quero passar tudo que foi criado no meu objeto, com os mesmos nomes que estao lá
            .push({user})
            .then(() => resolve());
        }
      })
    }
    //OBS - Libera para gravacao no Firebase ou passe o token de validacao
}
