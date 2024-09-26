import { Component } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu],
})
export class AppComponent {
  constructor() {}
}
