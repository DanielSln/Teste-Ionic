import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Route, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink],
})

export class HomePage {
  constructor(private router : Router) {}
  IrParaDetalhes() {
      this.router.navigateByUrl('/detalhes')
    }
  }
