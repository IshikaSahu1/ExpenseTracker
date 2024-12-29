import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensetrackerlistComponent } from './expensetrackerlist/expensetrackerlist.component';
import { ExpensetrackingComponent } from './expensetracking/expensetracking.component';
import { HttpClientModule,HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ExpensetrackerlistComponent,
    ExpensetrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
