import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsSectionComponent } from './user-details-section/user-details-section.component';

/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
 * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { addToCart } from '@rc-ses/self-service-portal-ui';
import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';

@Component({
  selector: 'rc-ses-app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, UserDetailsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly title = '@rc-ses/self-service-provider-demo-angular-ui';

  public readonly serviceName = 'Angular paslauga #1';

  /*
    * @MICROFRONTEND
    *
    * `addToCart` metodo kvietimas, kurį eksportuoja
    * single-spa modulis @rc-ses/self-service-portal-ui
    */
  public handleAddToCart = (service: string) => addToCart(service);

  /*
    * @MICROFRONTEND
    *
    * `redirectToLanding` metodo kvietimas, kurį eksportuoja
    * single-spa modulis @rc-ses/self-service-portal-ui-root
    */
  public handleRedirectToLanding = () => redirectToLanding();
}
