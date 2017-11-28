import { DepartamentosService } from './../../ADMIN/_services/departamentos.service';
import { FrutaService } from './../_services/fruta.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DetalleFrutasService } from './../_services/detalle-frutas.service';

import { NotificationsService } from 'angular2-notifications';



import { Subject } from 'rxjs/Rx';
import { path } from "../../../config.module";

declare var $: any

@Component({
  selector: 'app-detalle-frutas',
  templateUrl: './detalle-frutas.component.html',
  styleUrls: ['./detalle-frutas.component.css']
})
export class DetalleFrutasComponent implements OnInit {

  
  title = "Detalle Frutas"
  Table:any
  selectedData:any
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  Data:any
  Usuario:any
  
  frutasCombo:any
  
  DepartamentoCombo:any
  beginDate:any = 
  [{
    anio:''  }]
    selectedDate:any

    beginDay:any = 
    [{
      dia:''  }]
      selectedDay:any

      
    usuario:any
    private basePath:string = path.path
    url:String
  

  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private mainService: DetalleFrutasService,
    private parentService: FrutaService,
    private DepParentService: DepartamentosService
    

  ) { }
  
    ngOnInit() {

    this.Usuario = localStorage.getItem("currentId");
      
      this.dtOptions = {
        pagingType: 'full_numbers',
        language: {
          emptyTable: 'Tabla limpia',
          info: 'Mostrando página _PAGE_ de _PAGES_',
          infoEmpty: 'No hay registros disponibles',
          infoFiltered: '(filtrado de _MAX_ registros totales)',
          zeroRecords: 'Nada para mostrar, lo sentimos',
          search: 'Buscar',
          lengthMenu: 'Mostranto _MENU_ registro por página',
          paginate: {
            first: 'Primero',
            last: 'Ultimo',
            next: 'Siguiente',
            previous: 'Anterior'
          }
  
        }
      };
      this.cargarAll();

      this.parentService.getAll()
      .then(response => {
        this.frutasCombo = response
      }).catch(error => {
        console.clear     
        this.createError(error) 
      })


      this.DepParentService.getAll()
      .then(response => {
        this.DepartamentoCombo = response
      }).catch(error => {
        console.clear     
        this.createError(error) 
      })
      

      

     // this.usuario =JSON.parse(localStorage.getItem('currentId'));

  
      let beginDay = 31;
      this.selectedDay =beginDay

      for(let i=1;i<=beginDay;i++)
      {
        
        this.beginDay.push({
          dia:i        })
      }

      let date = new Date();
      let beginDate = date.getFullYear()
      this.selectedDate =beginDate
      for(let i=1900;i<=beginDate;i++)
      { 
        this.beginDate.push({
          anio:i        })
      }
      
    }

    onNavigate(){
      window.open("http://backend.sietd.alexmejicanos.com/api/download/detalle_frutas", "_blank");
  }

    subirImagenes(archivo,id){
      $('#Loading').css('display','block')
      $('#Loading').addClass('in')
      var archivos=archivo.srcElement.files;
      let url = `${this.basePath}/api/carga/detalle_frutas`
      let bar:any
      var i=0;
      var size=archivos[i].size;
      var type=archivos[i].type;
          if(size<(10*(1024*1024))){
          $("#"+id).upload(url,
              {
                excel: archivos[i],
                usuario: localStorage.getItem('currentId')
            },
            function(respuesta) 
            {
              $('#Loading').css('display','none')
              this.create('Establecimiento subido exitosamente')
              $("#barra_de_progreso").val(0)
              
              
            }, 
            function(progreso, valor) 
            {
                        
              $("#barra_de_progreso").val(valor);
            }
          );
        }
    }



    cargarAll(){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.dtTrigger = new Subject<any>();
      this.mainService.getAll()
                        .then(response => {
                          this.Table = response
                          this.dtTrigger.next()                          
                          $("#editModal .close").click();
                          $("#insertModal .close").click();
                          $('#Loading').css('display','none')
                          console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    cargarSingle(id:number){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.mainService.getSingle(id)
                        .then(response => {
                          this.selectedData = response;
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }
    update(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      
      this.mainService.update(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Dato Actualizado exitosamente')
                          $('#Loading').css('display','none')
      
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    delete(id:string){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Dato Eliminado exitosamente')
                          $('#Loading').css('display','none')
                          
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
      
    }
    insert(formValue:any){
      $('#Loading').css('display','block')
      $('#Loading').addClass('show')
      let pass = this.generar(20)
      formValue.estado=1
      formValue.password=pass
      this.mainService.create(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear 
                          this.create('Dato Ingresado')
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
