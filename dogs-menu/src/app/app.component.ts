import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  heartSharp,
  pawOutline, pawSharp,
  shuffleOutline, shuffleSharp
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  protected readonly appPages = [
    { title: 'Breeds', url: '/breeds', icon: 'paw' },
    { title: 'Favourites', url: '/favourites', icon: 'heart' },
    { title: 'Random', url: '/random', icon: 'shuffle' }
  ];
    constructor() {
    addIcons({
      heartOutline,
      heartSharp,
      pawOutline, pawSharp,
  shuffleOutline, shuffleSharp
    });
  }
}
