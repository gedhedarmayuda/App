import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details3Page } from './details3.page';

const routes: Routes = [
  {
    path: '',
    component: Details3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details3PageRoutingModule {}
