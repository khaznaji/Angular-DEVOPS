import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/model/subscription.model';
import { SubscriptionService } from 'src/app/shared/subscription.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ngOnInit() {
  
  }
  subscription: Subscription = new Subscription();

  constructor(private subscriptionService: SubscriptionService,    private formBuilder: FormBuilder // Injectez le FormBuilder
  ) {} 
  save() {
    this.subscriptionService
      .addSubscription(this.subscription)
      .subscribe({
        next: data => {
          console.log(data);
          this.subscription = new Subscription();
        },
        error: error => console.log(error)
      });
  }
  onSubmit() {
    this.save();    
  }
}
