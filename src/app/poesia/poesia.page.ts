import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoesiasService } from '../services/poesias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.page.html',
  styleUrls: ['./poesia.page.scss'],
})
export class PoesiaPage implements OnInit {

  constructor(private poesiaService:PoesiasService, private route:ActivatedRoute, private router: Router) { }

  poesia: Observable<any>
  comentarios: Observable<any>

  async ngOnInit() {
    //Recibir id que se envio de otra página
    const id=this.route.snapshot.paramMap.get("id")

    //Obtener empleo por el id
    this.poesia=this.poesiaService.getPoesia(id)

    this.comentarios=this.poesiaService.getComentariosPoesia(id)

    console.log("Observable", this.poesia)
    
    this.poesia.subscribe(data => {
      console.log("Subscribe", data)
    })


    
    //let auxEmpleado= await this.poesiaService.getEmpleoById2(id)
    //console.log("Await", auxEmpleado.titulo)

    //let telefonos= this.poesiaService.getTelefonos(id)

    //console.log("Telefonos", telefonos)
  }

  showComentarPoesia(id:any){
    this.router.navigate([`comentar-poesia/${id}`])
  }
}


