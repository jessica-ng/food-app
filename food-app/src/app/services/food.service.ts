import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'https://api.nal.usda.gov/fdc/v1/foods/';
  apiKey = 'wSMiFAxww5XAz28KjYNFCcevvgQlTzoFouxwVvNj'; // <-- Enter your own key here!
  type = 'search';
  
  
  constructor(private http: HttpClient) { }

  searchData(query: string): Observable<any>{
    console.log(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`)
    return this.http.get(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`).pipe(
      map(results => results['foods']));
    
    // return this.http.get(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`, {}, {})
    // .then(data => {

    //   console.log(data.status);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);
  
    // })
    // .catch(error => {
  
    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);
  
    // });
  }
}
