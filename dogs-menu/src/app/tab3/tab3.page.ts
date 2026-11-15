import { Component, computed, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonFooter, IonMenuButton, IonButtons } from '@ionic/angular';

import { Breeds } from '../services/breeds';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader ,IonFooter,IonMenuButton, IonButtons, IonToolbar, IonTitle, IonContent , IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton],
})
export class Tab3Page {
  constructor() {
  }

  private breedser = inject(Breeds);

  breeds = this.breedser.getAll();

  random = signal(this.getRandomId())

  getRandomId():number {
    return Math.floor(Math.random() * this.breeds.length)
  }

  next():void{
    const now = this.random();
    let fresh: number
    do{
       fresh = this.getRandomId()
    } while (fresh === now)

    this.random.set(fresh)
  }

  currentBreed  = computed(() => this.breeds[this.random()]);
}
