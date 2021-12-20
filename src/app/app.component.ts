import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //comment 1 : create a new property featureloaded to get a data source it's as default 'recipe'
featureloaded='recipe'
  onNavigate(feature:string){
    //comment 2 : here assign values that we got from featureSelected called inside app.component.html by onNavigate()
this.featureloaded=feature;
  }
  title = 'ShopList-RecipeBook';
}
