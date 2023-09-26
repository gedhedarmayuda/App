import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.page.html',
  styleUrls: ['./details2.page.scss'],
})
export class Details2Page implements OnInit {

  constructor(private NavCtrl:NavController) { }

  ngOnInit() {
  }
  goHome(){
    this.NavCtrl.navigateBack('home');
  }

}
