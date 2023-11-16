import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubscriptionService } from 'src/app/shared/subscription.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(private subscriptionService: SubscriptionService,     private route: ActivatedRoute,
    private formBuilder: FormBuilder ) {}// Injectez le FormBuilder
    event: any;

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.subscriptionService.getSubscriptionById(id).subscribe(event => {
      this.event = event;
    });
  }
}
