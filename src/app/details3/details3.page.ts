import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-details3',
  templateUrl: './details3.page.html',
  styleUrls: ['./details3.page.scss'],
})
export class Details3Page implements OnInit {

  constructor(private NavCtrl:NavController) { }

  ngOnInit() {
  }
  goHome(){
    this.NavCtrl.navigateBack('home');
  }

}
