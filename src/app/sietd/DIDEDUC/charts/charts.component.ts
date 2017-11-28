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
  DepartamentoCombo2:any
  beginDate:any = 
  [{
    anio:''  }]
    selectedDate:any

  private stats = Array<any>();

  constructor(private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,private mainService: ChartService,  private DepParentService: DepartamentosService) { }
 

    // Pie Establecimiento Danio
    public pieChartLabelsEDanio:string[] = [];
    public pieChartDataEDanio:number[] = [0];
    public pieChartTypeEDanio:string = 'pie';
    public pieChartColorsEDanio: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];



    // Pie Estudiantes Sector
    public pieChartLabelsEstSector:string[] = [];
    public pieChartDataEstSector:number[] = [0];
    public pieChartTypeEstSector:string = 'pie';
    public pieChartColorsEstSector: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];


    // Pie Aula
    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [0];
    public pieChartType:string = 'pie';
    public pieChartColors: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];

    // Pie Estudiantes
    public pieChartLabelsTEstud:string[] = [];
    public pieChartDataTEstud:number[] = [0];
    public pieChartTypeTEstud:string = 'pie';
    public pieChartColorsTEstud: Array < any > = [{backgroundColor: ["#ffa954", "#589b00", "#3ebf9b", "#4d86dc", "#f3af37"]}];

    // Pie Establecimiento
    public pieChartLabelsEst:string[] = [];
    public pieChartDataEst:number[] = [0];
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

    //  this.lineChartData = [
    //   {data: [], label: 'Series A'},
    //   {data: [], label: 'Series B'},
    //   {data: [], label: 'Series C'}
    // ];

    
    this.DepParentService.getAll()
    .then(response => {
      this.DepartamentoCombo = response
    }).catch(error => {
      console.clear     
      this.createError(error) 
    })

    this.DepParentService.getAll()
    .then(response => {
      this.DepartamentoCombo2 = response
    }).catch(error => {
      console.clear     
      this.createError(error) 
    })
    

    let date = new Date();
    let beginDate = date.getFullYear()
    this.selectedDate =beginDate
    for(let i=1900;i<=beginDate;i++)
    { 
      this.beginDate.push({
        anio:i        })
    }
    

  }

refereshChart(id:number){
  this.cargarSingleTotalMobiliario(id);
  this.cargarSingleTotalAulas(id);
  this.cargarSingleTotalEstablecimientosN(id);
  this.cargarSingleTotalEstudiantes(id);
  console.clear     
}

refereshChart2(id:number,anio:number ){
  this.cargarSingleEstSector(id, anio);
  this.cargarSingleEDanio(id, anio);
  
  console.clear     
}


  cargarSingleTotalMobiliario(id:number){
  
    this.mainService.getSingleTotalMobiliario(id)
                      .then(response => {
                        this.stats = response
                        
        this.barChartLabels.splice(0);
        this.barChartData.splice(0);
                        
                        for (let stat of this.stats) {
                            this.barChartLabels.push(stat.tipo); 
                        }
                        
                        var _titles = ["Buen Estado", "Mal Estado", "Deficit"]
                        var _parse = []
                        var _pivot = 3
                        var _pivot_key = ["buen_estado", "mal_estado", "deficit"]
                       
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

  public clearValues() : void{
    
     
    }
  
    cargarSingleEDanio(id:number, anio:number){
      
          this.mainService.getSingleEDanio(id, anio)
                            .then(response => {
                              this.stats = response
                              this.pieChartLabelsEDanio.splice(0);
                              this.pieChartDataEDanio.splice(0);

                              var _parse = []
                              for (let stat of this.stats) {
                              this.pieChartLabelsEDanio.push(stat.tipo_danio);
                              _parse.push(stat.establecimientos_daniados);
                              }  
                              this.pieChartDataEDanio = _parse;

                              console.clear 
                            }).catch(error => {
                              console.clear     
                              this.createError(error) 
                            })
        }
    cargarSingleEstSector(id:number, anio:number){
      
          this.mainService.getSingleEstSector(id, anio)
                            .then(response => {
                              this.stats = response
                              this.pieChartLabelsEstSector.splice(0);
                              this.pieChartDataEstSector.splice(0);

                              var _parse = []
                              for (let stat of this.stats) {
                              this.pieChartLabelsEstSector.push(stat.Departamento);
                              _parse.push(stat.cantidad_establecimientos);
                              }  
                              this.pieChartDataEstSector = _parse;

                              console.clear 
                            }).catch(error => {
                              console.clear     
                              this.createError(error) 
                            })
        }
    cargarSingleTotalEstudiantes(id:number){
      
          this.mainService.getSingleTotalEstudiantes(id)
                            .then(response => {
                              this.stats = response
                              
        this.pieChartLabelsTEstud.splice(0);
        this.pieChartDataTEstud.splice(0);
                            
                             var _parse = []
                              for (let stat of this.stats) {
                              this.pieChartLabelsTEstud.push(stat.tipo);
                              _parse.push(stat.cantidad_estudiantes);
                              }  
                               this.pieChartDataTEstud = _parse;
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
                        this.pieChartData.splice(0);
                        this.pieChartLabels.splice(0);
                        this.pieChartData = [];


                        if(response != null)
                        {
                          for (let stat of this.stats) {
                            this.pieChartLabels.push(stat.tipo_aula);
                            this.pieChartData.push(stat.cantidad_aulas);
                            }  
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
                            this.pieChartDataEst.splice(0);
                            this.pieChartLabelsEst.splice(0);
                            this.pieChartDataEst = [];
                            for (let stat of this.stats) {
                            this.pieChartLabelsEst.push(stat.nivel_educativo);
                            this.pieChartDataEst.push(stat.cantidad_nivel);
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
