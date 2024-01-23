import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { getUser } from '@rc-ses/self-service-portal-ui';

@Component({
  selector: 'app-user-details-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatGridListModule],
  styleUrl: './user-details-section.component.scss',
  templateUrl: './user-details-section.component.html'
})
export class UserDetailsSectionComponent {
  public readonly user = getUser();

  public displayUserDetails: boolean = false;

  public toggleUserDetails = () => this.displayUserDetails = !this.displayUserDetails;
}
