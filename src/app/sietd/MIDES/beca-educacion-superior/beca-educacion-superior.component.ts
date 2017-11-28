import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-beca-educacion-superior',
  templateUrl: './beca-educacion-superior.component.html',
  styleUrls: ['./beca-educacion-superior.component.css']
})
export class BecaEducacionSuperiorComponent implements OnInit {

  title = "Beca de Educación Superior"
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private _service: NotificationsService) { }
  
    ngOnInit() {
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
    }
  
  public options = {
               position: ["bottom", "right"],
               timeOut: 4000,
               lastOnBottom: false,
               animate: "fromLeft",  
               showProgressBar: false,
               pauseOnHover: true,
               clickToClose: true,
               maxLength: 200
           };
  
      create() {
                  this._service.success('¡Éxito!','Su solicitud fue completada.')
  
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
