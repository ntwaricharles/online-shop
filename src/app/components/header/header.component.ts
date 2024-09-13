import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isNavOpen = false;
  isDarkMode = false; // Property to track dark mode

  // Method to toggle the navigation bar in mobile view
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // Method to toggle dark mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    // Add or remove the 'dark-mode' class on the body
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
