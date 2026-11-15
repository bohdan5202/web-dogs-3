import { Component, computed, inject, signal  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent , IonList, IonItem, IonThumbnail, IonLabel, IonSearchbar, IonText, IonMenuButton, IonButtons } from '@ionic/angular';


import  { Breeds } from '../services/breeds';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader,IonText,IonMenuButton, IonButtons, IonToolbar,IonSearchbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel ,RouterLink ],
})
export class Tab1Page {
  private breedData = inject(Breeds);

  breeds = this.breedData.getAll();
  query = signal('')
  onSearch(event: CustomEvent):void {
  this.query.set(event.detail.value ?? '');
  }

  filtered = computed(() => {
  const q = this.query().trim().toLowerCase();
  return this.breeds.filter(breed => breed.name.toLowerCase().includes(q));
  });
}
