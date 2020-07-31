import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //Metodo para loguear con google 
  async loginGoogle() {
    let error = await this.auth.googleLogin();

    if(error == undefined){
      this.router.navigate(['crear-poesia'])
    }else{
      alert(JSON.stringify(error))
    }
  }

}
