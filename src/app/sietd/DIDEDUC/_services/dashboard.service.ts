import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { path } from "../../../config.module";

import "rxjs/add/operator/toPromise"; 

@Injectable()
export class DashboardService {

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

  getAllCantidadAular():Promise<any> {
  let url = `${this.basePath}/api/departamento/10/dashboard/dideduc/cantidad_aulas`

    return this.http.get(url)
                    .toPromise()
                      .then(response => {
                        //console.log(response.json())
                        return response.json()
                      })
                      .catch(this.handleError)                  
  }
   
  getAllCantidadMobiliario():Promise<any> {
    let url = `${this.basePath}/api/departamento/1/dashboard/dideduc/cantidad_mobiliario`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

  getSingleCantidadAulas(id:number):Promise<any> {
    let url = `${this.basePath}/api/aula/${id}`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

}