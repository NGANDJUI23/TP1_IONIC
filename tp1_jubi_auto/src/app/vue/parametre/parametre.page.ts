import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonThumbnail, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  standalone: true,
  imports: [IonBadge, IonList, IonThumbnail, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ParametrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
