import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details3PageRoutingModule } from './details3-routing.module';

import { Details3Page } from './details3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details3PageRoutingModule
  ],
  declarations: [Details3Page]
})
export class Details3PageModule {}
