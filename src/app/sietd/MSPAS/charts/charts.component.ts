import { ChartService } from './../_services/chart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DepartamentosService } from './../../ADMIN/_services/departamentos.service';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';
// import { Aulas } from './aulas';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


  DepartamentoCombo:any
  private stats = Array<any>();

  constructor(private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,private mainService: ChartService,  private DepParentService: DepartamentosService) { }
 
    // Pie Aula
    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [];
    public pieChartType:string = 'pie';
    public pieChartColors: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];

    // Pie Establecimiento
    public pieChartLabelsEst:string[] = [];
    public pieChartDataEst:number[] = [];
    public pieChartTypeEst:string = 'pie';    
    public pieChartColorsEst: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];

    // Pie Establecimiento
    public pieChartLabelsCentros:string[] = [];
    public pieChartDataCentros:number[] = [];
    public pieChartTypeCentros:string = 'pie';    
    public pieChartColorsCentros: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];

    // bar Mobiliario

    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public barChartOptions:any = {
      scaleShowVerticalLines: true,
      responsive: true,
      scaleShowValues: true, 
      scaleValuePaddingX: 10,
      scaleValuePaddingY: 10,
      
    };
    public barChartData:any[] = [
      {data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A'},
      {data: [0, 0, 0, 0, 0,0, 0], label: 'Series A'},
      {data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A'}
    ];
  
    // bar docentes

    public barChartLabelsDoc:string[] = [];
    public barChartTypeDoc:string = 'bar';
    public barChartLegendDoc:boolean = true;
    public barChartOptionsDoc:any = {
      scaleShowVerticalLines: true,
      responsive: true,
      scaleShowValues: true, 
      scaleValuePaddingX: 10,
      scaleValuePaddingY: 10,
      
    };
    public barChartDataDoc:any[] = [
      {data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A'}
    ];
  

  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> =[];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 


  ngOnInit():void {

     this.lineChartData = [
      {data: [], label: 'Series A'},
      {data: [], label: 'Series B'},
      {data: [], label: 'Series C'}
    ];

    
    this.DepParentService.getAll()
    .then(response => {
      this.DepartamentoCombo = response
    }).catch(error => {
      console.clear     
      this.createError(error) 
    })
    
  }

refereshChart(id:number){
  this.cargarSingleTotalDoctoresEnfermeras(id);
  this.cargarSingleTotalambulancias(id);
  this.cargarSingleTotalCamasMuni(id);
  this.cargarSingleTotalCentros(id);
}


  cargarSingleTotalDoctoresEnfermeras(id:number){
  
    this.mainService.getSingleTotalDoctoresEnfermerasMuni(id)
                      .then(response => {
                        this.stats = response
                        for (let stat of this.stats) {
                            this.barChartLabels.push(stat.municipio); 
                        }
                        
                        var _titles = ["Doctores", "Enfermeras", "Area"]
                        var _parse = []
                        var _pivot = 3
                        var _pivot_key = ["cantidad_doctores", "cantidad_enfermeras", "area"]
                       
                       for (var index = 0; index < _pivot; index++) {
                           var _elementPush = []
                           for (var position in response) {
                               var _item = response[position]
                               _elementPush.push(parseInt(_item[_pivot_key[index]]))
                           }
                           _parse.push({data: _elementPush, label: _titles[index]})
                       }
                          this.barChartData = _parse;
                          console.clear 
                      }).catch(error => {
                        console.clear     
                        this.createError(error) 
                      })
  }
 

  cargarSingleTotalambulancias(id:number){

    this.mainService.getSingleTotalAmbulanciasMuni(id)
                      .then(response => {
                        this.stats = response
                        this.pieChartData = [];
                        for (let stat of this.stats) {
                        this.pieChartLabels.push(stat.municipio);
                        this.pieChartData.push(stat.cantidad_ambulancias);
                        }  
                          console.clear 
                      }).catch(error => {
                        console.clear     
                        this.createError(error) 
                      })
  }

  cargarSingleTotalCamasMuni(id:number){
    
        this.mainService.getSingleTotalCamasMuni(id)
                          .then(response => {
                            this.stats = response
                            this.pieChartDataEst = [];
                            for (let stat of this.stats) {
                            this.pieChartLabelsEst.push(stat.municipio);
                            this.pieChartDataEst.push(stat.cantidad_camas);
                            }  
                              console.clear 
                          }).catch(error => {
                            console.clear     
                            this.createError(error) 
                          })
      }

      
      cargarSingleTotalCentros(id:number){
        
            this.mainService.getSingleTotalCentroSaludMuni(id)
                              .then(response => {
                                this.stats = response
                                this.pieChartDataCentros = [];
                                for (let stat of this.stats) {
                                this.pieChartLabelsCentros.push(stat.municipalidad);
                                this.pieChartDataCentros.push(stat.cantidad_centro_sanatorio);
                                }  
                                  console.clear 
                              }).catch(error => {
                                console.clear     
                                this.createError(error) 
                              })
          }

          

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  createError(error) {
    this._service.error('¡Error!',error)

}
  
}
