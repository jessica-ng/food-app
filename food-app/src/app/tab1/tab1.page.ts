import { Component } from '@angular/core';
import { FoodService } from '../services/food.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  results: Observable<any>;

  foodName: string;
  // results: Observable<any>;
  searchTerm: string = '';

  constructor(
    private foodService: FoodService,
    
    ) {}

  search(foodName) {
    console.log(foodName);
    // this.results = this.foodService.searchData(foodName);
    // console.log(this.results.subscribe(x => console.log(x)));
    this.results = this.foodService.searchData(this.foodName);
    console.log(this.results)
  }
}