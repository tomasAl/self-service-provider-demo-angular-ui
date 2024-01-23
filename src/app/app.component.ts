import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { addToCart } from '@rc-ses/self-service-portal-ui';
import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';
import { UserDetailsSectionComponent } from './user-details-section/user-details-section.component';

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

  public handleAddToCart = (service: string) => addToCart(service);

  public handleRedirectToLanding = () => redirectToLanding();
}
