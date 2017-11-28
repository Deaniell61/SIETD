import { ChartService } from './../_services/chart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DepartamentosService } from './../../ADMIN/_services/departamentos.service';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Rx';
import { Aulas } from './aulas';

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
  this.cargarSingleTotalMobiliario(id);
  this.cargarSingleTotalAulas(id);
  this.cargarSingleTotalEstablecimientosN(id);
  this.cargarSingleTotalDocentes(id);
}


  cargarSingleTotalMobiliario(id:number){
  
    this.mainService.getSingleTotalMobiliario(id)
                      .then(response => {
                        this.stats = response
                        for (let stat of this.stats) {
                            this.barChartLabels.push(stat.tipo); 
                        }
                        
                        var _titles = ["Animales Dañados", "Perdidos", "Deficit"]
                        var _parse = []
                        var _pivot = 3
                        var _pivot_key = ["animales_daniados", "animales_perdidos", "deficit"]
                       
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

  
  cargarSingleTotalDocentes(id:number){
    
      this.mainService.getSingleTotalDocentes(id)
                        .then(response => {
                          this.stats = response
                          var _titles = []
                          for (let stat of this.stats) {
                              _titles.push(stat.tipo); 
                          }
                          
                          
                          
                           var _parse = []
                           var _pivot = _titles.length;

                           console.log(_titles+ "-" + _pivot);
                        //   var _pivot_key = ["buen_estado", "mal_estado", "deficit"]
                         
                        //  for (var index = 0; index < _pivot; index++) {
                        //      var _elementPush = []
                        //      for (var position in response) {
                        //          var _item = response[position]
                        //          _elementPush.push(parseInt(_item[_pivot_key[index]]))
                        //      }
                        //      _parse.push({data: _elementPush, label: _titles[index]})
                        //  }
                        //     this.barChartData = _parse;

                            console.clear 
                        }).catch(error => {
                          console.clear     
                          this.createError(error) 
                        })
    }

  

  cargarSingleTotalAulas(id:number){

    this.mainService.getSingleTotalAulas(id)
                      .then(response => {
                        this.stats = response
                        this.pieChartData = [];
                        for (let stat of this.stats) {
                        this.pieChartLabels.push(stat.tipo_aula);
                        this.pieChartData.push(stat.cantidad_aulas);
                        }  
                          console.clear 
                      }).catch(error => {
                        console.clear     
                        this.createError(error) 
                      })
  }

  cargarSingleTotalEstablecimientosN(id:number){
    
        this.mainService.getSingleTotalEstablecimientosNivel(id)
                          .then(response => {
                            this.stats = response
                            this.pieChartDataEst = [];
                            for (let stat of this.stats) {
                            this.pieChartLabelsEst.push(stat.tipo);
                            this.pieChartDataEst.push(stat.total_establecimientos);
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
