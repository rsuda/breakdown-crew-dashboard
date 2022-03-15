import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakdownHomeComponent } from './breakdown-home/breakdown-home.component';
import { MyStatsComponent } from './breakdown-home/my-stats/my-stats.component';


const routes: Routes = [
  { path: '', component: BreakdownHomeComponent },
  { path: 'my-stats-page', component: MyStatsComponent },
  { path: 'template-page', component: BreakdownHomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
