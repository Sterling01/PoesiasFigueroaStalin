import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Poesia } from '../class/poesia';
import { Observable } from 'rxjs';
import { PoesiasService } from '../services/poesias.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-poesia',
  templateUrl: './crear-poesia.page.html',
  styleUrls: ['./crear-poesia.page.scss'],
})
export class CrearPoesiaPage implements OnInit {

  constructor(private auth: AuthService, private router: Router, private poesiaService: PoesiasService, private camera:Camera) { }

  poesia: Poesia = new Poesia()
  user: Observable<any>
  base64Image: any

  async ngOnInit() {

    this.auth.getCurrentUser().then(user => {
      console.log(user);

      this.user=this.auth.user

      //Si esta autentificado se va a home
      if(!user){
        this.router.navigate(['login'])
      }
    });

  }

  async guardarPoesia(){
    console.log(this.poesia)

    this.user.subscribe(data => {
      this.poesia.autor=data.displayName
    })
    
    //Insertar un nuevo empleo
    let number = await this.poesiaService.saveEmpleado2(this.poesia)
    console.log("Nuevo empleo guardado", number)
    this.router.navigate(['lista-poesias'])

    //this.empleosService.insertEmpleo(this.empleo)
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(this.base64Image)
    }, (err) => {
     // Handle error
     console.log(err)
    });
  }


}
