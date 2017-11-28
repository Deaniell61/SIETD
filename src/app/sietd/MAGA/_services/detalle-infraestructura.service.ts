import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http";

import { path } from "../../../config.module";

import "rxjs/add/operator/toPromise";

export interface LocalUserObject {
  currentId: string,
  currentUser: string
}


@Injectable()
export class DetalleInfraestructuraService {

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

  getAll():Promise<any> {
  let url = `${this.basePath}/api/detalle_infraestructura`

    return this.http.get(url)
                    .toPromise()
                      .then(response => {
                        //console.log(response.json())
                        return response.json()
                      })
                      .catch(this.handleError)                  
  }

  create(form):Promise<any> {
    let url = `${this.basePath}/api/detalle_infraestructura`
  
      return this.http.post(url,form)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }
  delete(id):Promise<any> {
    let url = `${this.basePath}/api/detalle_infraestructura/${id}`
  
      return this.http.delete(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }
  update(form):Promise<any> {
    let url = `${this.basePath}/api/detalle_infraestructura/${form.id}`
  
      return this.http.put(url,form)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }
  
   
  getSingle(id:number):Promise<any> {
    let url = `${this.basePath}/api/detalle_infraestructura/${id}`
  
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)                  
    }

        // Get Local User Object from Local Storage
 getLocalUserObject(): LocalUserObject {
  return JSON.parse(localStorage.getItem('currentId') || null);
}

// Set Local User Object using the given value.
setLocalUserObject(localUserObject: LocalUserObject) {
  localStorage.setItem('currentId', JSON.stringify(localUserObject));
}

// Destroy the Local User Object.
destroyLocalUserObject() {
  localStorage.removeItem('currentId');
}
}
