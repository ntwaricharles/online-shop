import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Property to control navigation visibility on mobile
  isNavOpen = false;

  // Method to toggle the navigation bar in mobile view
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
