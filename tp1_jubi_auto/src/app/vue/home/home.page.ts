import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSearchbar, IonFooter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTab, IonCard, IonCardHeader, IonToast, IonBadge, IonCardContent, IonCardTitle, IonItem, IonList, IonCardSubtitle, IonAvatar } from '@ionic/angular/standalone';
import { DashboardServiceService } from 'src/app/services/dashboard/dashboard-service.service';
import { transactions } from 'src/app/data/transit_data';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCardSubtitle, IonList, IonItem, IonCardTitle, IonCardContent, IonBadge, IonToast, IonCardHeader, IonCard, IonTab, IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonFooter, IonSearchbar, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  transact = transactions;
  constructor(public service: DashboardServiceService) { }
  // nbr: number = service.

}
