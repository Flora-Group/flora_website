import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'under-construction'
},
{
  path: 'under-construction',
  component: UnderConstructionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
