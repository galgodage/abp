import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';

const routes: Routes = [
  { path: ':id', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),DescriptionRoutingModule],
  exports: [RouterModule]
})
export class DescriptionModule { }
