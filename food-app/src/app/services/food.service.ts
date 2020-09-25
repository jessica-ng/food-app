import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // url = 'https://api.nal.usda.gov/fdc/v1/foods/';
  // apiKey = 'wSMiFAxww5XAz28KjYNFCcevvgQlTzoFouxwVvNj'; // <-- Enter your own key here!
  type = 'search';
  url = 'https://api.edamam.com/api/food-database/v2/parser';
  apiKey = '6dbddb37bb4e5c81badda1297a0aeebe';
  apiId = '2b5e3e5d';

  recipes_appKey = 'aca052dbfb93ee9ce9d152e38b1db381';
  recipes_appId = '7a64702a';
  
  
  constructor(private http: HttpClient) { }

  searchData(query: string): Observable<any>{
    // console.log(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`)
    // return this.http.get(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`).pipe(
    //   map(results => results['foods']));
    
    console.log(`${this.url}?ingr=${encodeURI(query)}&app_id=${this.apiId}&app_key=${this.apiKey}`)
    console.log(`${this.url}?ingr=${encodeURI(query)}&app_id=${this.apiId}&app_key=${this.apiKey}`)
    return this.http.get(`${this.url}?ingr=${encodeURI(query)}&app_key=${this.apiKey}&app_id=${this.apiId}`).pipe(
      map(results => results['hints']));
  }

  searchRecipe(query: string): Observable<any>{
    // console.log(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`)
    // return this.http.get(`${this.url}${this.type}?api_key=${this.apiKey}&query=${query}`).pipe(
    //   map(results => results['foods']));
    
    console.log(`https://api.edamam.com/search?q=${encodeURI(query)}&app_id=${this.recipes_appId}&app_key=${this.recipes_appKey}`)
    
    return this.http.get(`https://api.edamam.com/search?q=${encodeURI(query)}&app_id=${this.recipes_appId}&app_key=${this.recipes_appKey}`).pipe(
      map(results => results['hits']))
  }

  getDetails(query: string): Observable<any>{
    console.log(`https://api.edamam.com/search?q=${encodeURI(query)}&app_id=${this.recipes_appId}&app_key=${this.recipes_appKey}`)
    return this.http.get(`https://api.edamam.com/search?q=${encodeURI(query)}&app_id=${this.recipes_appId}&app_key=${this.recipes_appKey}`)
  }
}
