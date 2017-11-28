import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { path } from "../../../config.module";

import "rxjs/add/operator/toPromise"; 

@Injectable()
export class ChartService {

  headers = new Headers({'Access-Control-Allow-Origin':'*',
  'cache-control':'no-cache',
  'server':'Apache/2.4.18 (Ubuntu)',
  'x-ratelimit-limit':'60',
  'x-ratelimit-remaining':'59'})
private basePath:string = path.path



constructor(private http:Http){
}

private handleError(error:any):Promise<any> {
  console.error("ha ocurrido un error")
  console.log(error)
  return Promise.reject(error.message || error)
  }
  

  getSingleEDanio(id:number, anio:number):Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/establecimientos_danio/${anio}?type=JSON`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

  getSingleEstSector(id:number, anio:number):Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/establecimiento_sector/${anio}?type=JSON`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

  getSingleTotalAulas(id:number):Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/cantidad_aulas?type=JSON`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

    getSingleTotalMobiliario(id:number):Promise<any> {
      let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/cantidad_mobiliario?type=JSON`
    
        return this.http.get(url)
                        .toPromise()
                          .then(response => {
                            //console.log(response.json())
                            return response.json()
                          })
                          .catch(this.handleError)                  
      }


      getSingleTotalEstablecimientosNivel(id:number):Promise<any> {
        let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/establecimiento_nivel?type=JSON`
      
          return this.http.get(url)
                          .toPromise()
                            .then(response => {
                              //console.log(response.json())
                              return response.json()
                            })
                            .catch(this.handleError)                  
        }


        
      getSingleTotalEstudiantes(id:number):Promise<any> {
        let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/total_estudiantes?type=JSON`
      
          return this.http.get(url)
                          .toPromise()
                            .then(response => {
                              //console.log(response.json())
                              return response.json()
                            })
                            .catch(this.handleError)                  
        }


        
      getSingleTotalDocentes(id:number):Promise<any> {
        let url = `${this.basePath}/api/departamento/${id}/dashboard/dideduc/puestos_docentes?type=JSON`
      
          return this.http.get(url)
                          .toPromise()
                            .then(response => {
                              //console.log(response.json())
                              return response.json()
                            })
                            .catch(this.handleError)                  
        }

}
