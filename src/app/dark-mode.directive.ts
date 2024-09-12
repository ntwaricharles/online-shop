import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkMode]',
})
export class DarkModeDirective {
  private darkMode = false;

  @HostBinding('class.dark-mode') get mode() {
    return this.darkMode;
  }

  @HostListener('click') toggleMode() {
    this.darkMode = !this.darkMode;
  }
}
