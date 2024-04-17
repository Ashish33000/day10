import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  apiurl='http://localhost:8080'
  // signup
  signup(data:any):Observable<any>{

    return this.http.post(`${this.apiurl}/auth/register`,data);

  }
}
