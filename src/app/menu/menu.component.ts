import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
