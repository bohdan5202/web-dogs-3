import { Component, inject, computed, input } from '@angular/core';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {  heart, heartOutline } from 'ionicons/icons';

import { Breeds } from '../services/breeds';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.page.html',
  styleUrls: ['./breed-details.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons , IonBackButton,IonList,IonItem,IonLabel, IonButton, IonIcon , IonText],
})
export class BreedDetailsPage {
  constructor() {
    addIcons({  heart,heartOutline });
  }
  id = input.required<string>();
  private breedser = inject(Breeds);

  breedcop = computed(() => this.breedser.getById(Number(this.id())));
  breedFav = computed(() => this.breedser.isFavourite(Number(this.id())));

  toggle():void {
     this.breedser.toggleFavourite(Number(this.id()))
  }

}
