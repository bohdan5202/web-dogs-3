import { Component , computed, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonList, IonItem, IonThumbnail, IonLabel, IonText, IonIcon, IonMenuButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {  heartOutline } from 'ionicons/icons';

import { Breeds } from '../services/breeds';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader,IonIcon,IonMenuButton , IonButtons,  IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonText, RouterLink]
})
export class Tab2Page {
  constructor() {
      addIcons({ heartOutline });
    }
  private breedser = inject(Breeds);

  favBreeds = computed(() => this.breedser.getFavourites())
}
