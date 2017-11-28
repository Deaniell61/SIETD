import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { UsuariosService } from "../_services/usuarios.service";
import { EntidadesService } from "../_services/entidades.service";
import { DepartamentosService } from "../_services/departamentos.service";
import { MunicipiosService } from "../_services/municipios.service";
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title = "Usuarios"
  userTable:any
  userTypesCombo:any
  foreignCombo:any
  foreignData:any
  selectedUser:any
  beginDate:any
  age:any=0
  
  Data:any
  deptosCombo:any
  entiCombo:any
  public rowsOnPage = 5;
  public search:any
  muniCombo:any
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService,
    private deptoService: DepartamentosService,
    private muniService: MunicipiosService,
    private entiService: EntidadesService  
  ) { }
  

    ngOnInit() {
      let date = new Date();
      let month = date.getMonth()+1;
      let month2;
      if(month<10){
        month2='0'+month;
      }else{
        month2=month
      }
      this.beginDate= date.getFullYear()+'-'+month2+'-01'
      
      this.cargarUsers()
      this.userService.getTypes()
                        .then(response => {
                          this.userTypesCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      this.deptoService.getAll()
                        .then(response => {
                          this.deptosCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      this.entiService.getAll()
                        .then(response => {
                          this.entiCombo = response
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    cargarEdad(anio){
      let date = new Date();
      let anio1 = anio.split('-')
      this.age = (+date.getFullYear())-(+anio1[0])
    }
    cargarMunicipios(id:number){
      this.muniService.getAll(id)
                        .then(response => {
                          this.muniCombo = response.municipio
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarUsers(){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.userService.getAll()
                        .then(response => {
                          this.userTable = response
                          $('#Loading').css('display','none')
                          
                          $("#editModal .close").click();
                          $("#insertModal .close").click();
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarUser(id:number){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.userService.getSingle(id)
                        .then(response => {
                          this.selectedUser = response;
                          this.cargarMunicipios(response.departamento);
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    updateUser(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      
      this.userService.update(formValue)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Actualizado exitosamente')
                          $('#Loading').css('display','none')
      
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    deleteUser(id:string){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.userService.delete(id)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Eliminado exitosamente')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insertUser(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      let pass = this.generar(20)
      formValue.estado=1
      formValue.password=pass
      this.userService.create(formValue)
                        .then(response => {
                          this.cargarUsers()
                          console.clear 
                          this.create('Usuario Ingresado')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
      
    }
    generar(longitud)
    {
      let i:number
      var caracteres = "123456789+/-*abcdefghijkmnpqrtuvwxyz123456789+/-*ABCDEFGHIJKLMNPQRTUVWXYZ12346789+/-*";
      var contraseña = "";
      for (i=0; i<longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
      return contraseña;
    }
    
    
  public options = {
               position: ["bottom", "right"],
               timeOut: 2000,
               lastOnBottom: false,
               animate: "fromLeft",  
               showProgressBar: false,
               pauseOnHover: true,
               clickToClose: true,
               maxLength: 200
           };
  
    create(success) {
                this._service.success('¡Éxito!',success)

    }
    createError(error) {
                this._service.error('¡Error!',error)

    }
      arrow = 'fa-chevron-down'
      seleccion(){
        if(document.getElementById('Forms').className!='collapse text-left ulhover' && document.getElementById('Forms').className!='text-left ulhover collapse')
          {
            this.arrow = 'fa-chevron-down'
          }else{
            this.arrow = 'fa-chevron-up'
          }
      }
}
