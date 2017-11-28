import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { path } from "../../../config.module";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ChartService {

  headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'cache-control': 'no-cache',
    'server': 'Apache/2.4.18 (Ubuntu)',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '59'
  })
  private basePath: string = path.path



  constructor(private http: Http) {
  }

  private handleError(error: any): Promise<any> {
    console.error("ha ocurrido un error")
    console.log(error)
    return Promise.reject(error.message || error)
  }

  // CANTIDAD ENFERMERAS Y DOCTORES POR MUNICIPIO Y CENTRO SANATORIO (AREA DE SALUD U HOSPITALES)
  getSingleTotalDoctoresEnfermerasMuni(id: number): Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/salud/enfermeras_doctores_municipio`

    return this.http.get(url)
      .toPromise()
      .then(response => {
        //console.log(response.json())
        return response.json()
      })
      .catch(this.handleError)
  }
  
  // CANTIDAD DE AMBULACIAS POR MUNICIPIO Y CENTRO SANATORIO
  getSingleTotalAmbulanciasMuni(id: number): Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/salud/ambulancias_municipio`

    return this.http.get(url)
      .toPromise()
      .then(response => {
        //console.log(response.json())
        return response.json()
      })
      .catch(this.handleError)
  }
  
  // CANTIDAD DE CAMAS POR MUNICIPIO Y CENTRO SANATORIO   (AREA DE SALUD U HOSPITALES)
  getSingleTotalCamasMuni(id: number): Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/salud/camas_municipio`

    return this.http.get(url)
      .toPromise()
      .then(response => {
        // console.log(response.json())
        return response.json()
      })
      .catch(this.handleError)
  }

  // CANTIDAD DE CENTROS DE SALUD, DE ATENCIÓN PERMANENTE, PUESTOS DE SALUD Y HOSPITALES POR MUNICIPIO
  getSingleTotalCentroSaludMuni(id: number): Promise<any> {
    let url = `${this.basePath}/api/departamento/${id}/dashboard/salud/centros_salud_municipio`

    return this.http.get(url)
      .toPromise()
      .then(response => {
        console.log(response.json())
        return response.json()
      })
      .catch(this.handleError)
  }

  

  


  
}
