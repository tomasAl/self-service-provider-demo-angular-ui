import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo interfeisų import'ai
 * apibrėžti src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { getUser } from '@rc-ses/self-service-portal-ui';

@Component({
  selector: 'app-user-details-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatGridListModule],
  styleUrl: './user-details-section.component.scss',
  templateUrl: './user-details-section.component.html'
})
export class UserDetailsSectionComponent {
  /*
   * @MICROFRONTEND
   *
   * `getUser` metodo kvietimas, bei User tipas, kuriuos eksportuoja
   * single-spa modulis @rc-ses/self-service-portal-ui
   */
  public readonly user = getUser();

  public displayUserDetails: boolean = false;

  public toggleUserDetails = () => this.displayUserDetails = !this.displayUserDetails;
}
