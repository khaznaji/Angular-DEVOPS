import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, TypeSubscription } from 'src/app/model/subscription.model';
import { SubscriptionService } from 'src/app/shared/subscription.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  subscription:any;

  ngOnInit() {
    this.reloadData();

  }
  constructor(private router: Router ,private subscriptionService: SubscriptionService,    private formBuilder: FormBuilder ){}// Injectez le FormBuilder

  reloadData() {
    this.subscription = this.subscriptionService.getAll().subscribe((res)=>{
      this.subscription=res;
      console.log(res);
  
     });

  }
  showEventDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
  subscriptionTypes: string[] = Object.values(TypeSubscription);
  // Valeur initiale vide
 allProjects: Subscription[] = []; // Store all projects for filtering
 adminProjects: Subscription[] = [];

 selectedType: string = ''; // Type sélectionné
 filterByType(type: string): Subscription[] {
  return this.subscription.filter((event: { typeSub: TypeSubscription; }) => event.typeSub === type as TypeSubscription);
}

onTypeChange() {
  if (this.selectedType === '') {
    // Si aucun type n'est sélectionné, affichez tous les abonnements
    this.subscription = this.subscription;
  } else {
    // Sinon, filtrez les abonnements en fonction du type sélectionné
    this.subscription = this.filterByType(this.selectedType);
  }
}
  
}
