import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';
  //uri = 'http://192.168.99.100:4000/business';

  constructor(
    private http: HttpClient
  ) { }

  addBusiness(person_name, business_name, business_gst_number) {
      const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'));
    }

  getAllBusiness(): Observable<any>{
    return this.http.get(`${this.uri}`);
  }

  getBusiness(id: string): Observable<any>{
    return this.http.get(`${this.uri}/edit/${id}`)
  }

  editBusiness(person_name, business_name, business_gst_number, id: string) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  delete(id: string){
    this.http.get(`${this.uri}/delete/${id}`)
      .subscribe(res => console.log('Done'));
  }

}
