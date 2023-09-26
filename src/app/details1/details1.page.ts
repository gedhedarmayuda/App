import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-details1',
  templateUrl: './details1.page.html',
  styleUrls: ['./details1.page.scss'],
})
export class Details1Page implements OnInit {

  constructor(private NavCtrl:NavController) { }

  ngOnInit() {
  }
  goHome(){
    this.NavCtrl.navigateBack('home');
  }

}
