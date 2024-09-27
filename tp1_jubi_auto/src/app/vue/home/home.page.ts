import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSearchbar, IonFooter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTab } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTab, IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonFooter, IonSearchbar, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }
}
