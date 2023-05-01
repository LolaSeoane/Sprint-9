import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getMenu():Observable<object>{
    return this.http.get<any>('http://localhost:3000/menu1')
  }
  getDishes():Observable<object>{
    return this.http.get<any>('http://localhost:3000/dishes')
  }
}
