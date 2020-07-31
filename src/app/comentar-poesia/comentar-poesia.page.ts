import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PoesiasService } from '../services/poesias.service';
import { Observable } from 'rxjs';
import { Comentario } from '../class/comentario';

@Component({
  selector: 'app-comentar-poesia',
  templateUrl: './comentar-poesia.page.html',
  styleUrls: ['./comentar-poesia.page.scss'],
})
export class ComentarPoesiaPage implements OnInit {

  constructor(private auth: AuthService, private router: Router, private poesiaService: PoesiasService, private route:ActivatedRoute) { }

  user: Observable<any>
  poesia: Observable<any>

  comentario: Comentario = new Comentario()

  async ngOnInit() {

    this.auth.getCurrentUser().then(user => {
      console.log(user);

      this.user=this.auth.user

      //Si esta autentificado se va a home
      if(!user){
        this.router.navigate(['login'])
      }
    });

    //Recibir id que se envio de otra página
    const id=this.route.snapshot.paramMap.get("id")

    //Obtener empleo por el id
    this.poesia=this.poesiaService.getPoesia(id)

    console.log("Observable", this.poesia)
    
    this.poesia.subscribe(data => {
      console.log("Subscribe", data)
    })

  }

  async agregarComentario(id:any){

    this.user.subscribe(data1 => {
      this.comentario.usuario=data1.displayName
    })

    this.comentario.uidPoesia=id
    
    this.poesiaService.insertComentario(this.comentario)

    this.router.navigate(['lista-poesias'])
  }

}
