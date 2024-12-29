import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensetrackerlistComponent } from './expensetrackerlist/expensetrackerlist.component';
import { ExpensetrackingComponent } from './expensetracking/expensetracking.component';

const routes: Routes = [
  {
    path:'expensetrackerlist',
    component : ExpensetrackerlistComponent
  },
  {
  path:'expensetracking',
  component : ExpensetrackingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
