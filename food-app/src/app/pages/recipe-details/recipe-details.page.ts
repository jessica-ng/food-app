import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})

export class RecipeDetailsPage implements OnInit {

 
  information = null;
  id = null;
  
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param foodService The movie Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) { }
  
  ngOnInit() {
    // Get the ID that was passed with the URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  
    // Get the information from the API
    // this.foodService.getDetails(this.id).subscribe(result => {
    //   this.information = result['hits']['recipes'];});
    this.information = this.foodService.searchRecipe(this.id);
    console.log(this.information)
  }


  // openWebsite() {
  //   window.open(this.information.Website, '_blank');
  // }
}