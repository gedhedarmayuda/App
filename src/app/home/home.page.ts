import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private NavCTRL : NavController) {}
  onClickItem1(){
    this.NavCTRL.navigateForward('details');
  }
  onClickItem2(){
    this.NavCTRL.navigateForward('details1');
  }
  onClickItem3(){
    this.NavCTRL.navigateForward('details2');
  }
  onClickItem4(){
    this.NavCTRL.navigateForward('details3');
  }
}
