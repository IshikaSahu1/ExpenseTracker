import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expensetracking',
  templateUrl: './expensetracking.component.html',
  styleUrls: ['./expensetracking.component.css']
})
export class ExpensetrackingComponent implements OnInit {

  form = {
    
    category: '',
    description: '',
    amount: '',
    date: ''
  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('Form data before submission:', this.form);


    this.httpClient.post<any>("http://localhost:8084/api/expenses/add", this.form).subscribe({
      next: (res) => {
        if (res && res.success) {
          console.log('Response:', res);
          this.router.navigateByUrl('/index.html'); // Replace with a valid route
        } else {
          console.error('Submission failed:');
        }
      },
     
    });
  }
}