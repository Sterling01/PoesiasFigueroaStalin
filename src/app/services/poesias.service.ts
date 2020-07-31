import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poesia } from '../class/poesia';
import { Comentario } from '../class/comentario';

@Injectable({
  providedIn: 'root'
})
export class PoesiasService {

  constructor(private afs: AngularFirestore) { }

  getPoesias(): Observable<any[]>{
    return this.afs.collection('poesias', ref => ref.orderBy('fecha','desc')).valueChanges();
  }

  getPoesia(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<Event>(`poesias/${uid}`);
    return itemDoc.valueChanges();
  }

  getComentariosPoesia(uid: string){
    return this.afs.collection('comentarios', ref => ref.where("uidPoesia", "==", uid)).valueChanges();
  }
  

  insertComentario(comentario : Comentario){
    const refEmpleo=this.afs.collection("comentarios")
    comentario.uid = this.afs.createId() 
    const param=JSON.parse(JSON.stringify(comentario))
    refEmpleo.doc(comentario.uid).set(param), {merge: true}
  }

  async saveEmpleado2(poesia: Poesia) {
    let uidPoesia = this.afs.createId();
    let refCount = this.afs.firestore.collection("params").doc("secuencias");
    let refPoesia = this.afs.firestore.collection("poesias").doc(uidPoesia);

    return await this.afs.firestore
      .runTransaction(async transaction => {
        const doc = await transaction.get(refCount);

        let newPoesiaNumber = 1;
        // Si este no existe crea el registro con un valor inicial
        if (!doc.exists) {
          transaction.set(refCount, { empleoNumber: newPoesiaNumber });
        }else{
          //Si existe incrementa este en 1
          newPoesiaNumber = doc.data().empleoNumber + 1;
          transaction.update(refCount, {
            empleoNumber: newPoesiaNumber
          });
        }

        poesia.uid = uidPoesia;//this.afs.createId();
        poesia.numero = newPoesiaNumber;

        //const param = JSON.parse(JSON.stringify(empleo));
        //transaction.set(refEmpleo, param);

        transaction.set(refPoesia, Object.assign({}, poesia));

        // retorna el nuevo secuencial del registro ingresado
        return newPoesiaNumber;
      })
      .then(empleoNumber => {
        return empleoNumber;
      })
      .catch(error => {
        console.error("Error", JSON.stringify(error));
        throw error;
      });
  }

}
