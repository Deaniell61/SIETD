import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./../_services/auth.service";

import { NotificationsService } from 'angular2-notifications';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth:any

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private _service: NotificationsService) { }

  login(formValue:any){
  //  console.log(`user: ${formValue.lg_username} pass: ${formValue.lg_password}`)
  $('#Loading').css('display','block')
  $('#Loading').addClass('show')
    this.authenticationService.Authentication(formValue)
      .then(response => {
        this.auth = response
        this.create('Acceso autorizado')
        localStorage.setItem('currentUser', response.username);
        localStorage.setItem('currentEmail', response.correo_electronico);
        localStorage.setItem('currentFirstName', response.nombres);
        localStorage.setItem('currentLastName', response.apellidos);
        localStorage.setItem('currentId', response.id);
        localStorage.setItem('currentDPI', response.dpi);
        localStorage.setItem('currentROL', response.rol);
        if(response.entidad_usuario){
          localStorage.setItem('currentENTIDAD', response.entidad_usuario.nombre.toUpperCase());
          $('#Loading').css('display','none')
          this.router.navigate(['sietd/'+response.entidad_usuario.nombre.toUpperCase()])
        }else{
          localStorage.setItem('currentENTIDAD', 'ADMIN');
          $('#Loading').css('display','none')
          this.router.navigate(['sietd/ADMIN'])
        }
      }).catch(error => {
        this.createError(error)
      })

    
  }
  ngOnInit() {
  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: false,
    preventDuplicates: true,
    animate: "scale",  
    maxLength: 400
  };

create(info) {
  this._service.success('¡Éxito!',info)

}
createError(error) {
  this._service.error('¡Error!',error)

}

}
