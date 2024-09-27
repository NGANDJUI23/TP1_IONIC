import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonSplitPane, IonList, IonItem, IonMenuToggle, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonIcon, IonItem, IonList, IonSplitPane, IonButtons, IonMenuToggle, IonMenuButton, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonMenu, RouterLink],
})
export class AppComponent {
  constructor() { }
}
