import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkMode]',
})
export class DarkModeDirective {
  private darkMode = false;

  @HostListener('click') toggleMode() {
    this.darkMode = !this.darkMode;

    // Toggle the 'dark-mode' class on the body element
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
}
