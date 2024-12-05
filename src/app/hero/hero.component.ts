import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  titulo: string = 'Bienvenido a EmolianWeb';
  lottieOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_your-animation.json', // URL de la animación
    loop: true,
    autoplay: true,
  };
}


