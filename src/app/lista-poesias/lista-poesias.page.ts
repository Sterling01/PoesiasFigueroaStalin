import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoesiasService } from '../services/poesias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-poesias',
  templateUrl: './lista-poesias.page.html',
  styleUrls: ['./lista-poesias.page.scss'],
})
export class ListaPoesiasPage implements OnInit {

  poesias: Observable<any[]>

  constructor(private poesiasServices:PoesiasService, private router: Router) { }

  ngOnInit() {
    this.poesias=this.poesiasServices.getPoesias()

  }

  showCrearPoesia(){
    this.router.navigate(['/crear-poesia'])
  }

  showPoesia(id:any){
    this.router.navigate([`poesia/${id}`])
  }

  trackByFn(index, obj){
    return obj.uid;
  }

}
