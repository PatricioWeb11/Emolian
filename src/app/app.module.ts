import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';


import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

// Exporta una función que proporciona el reproductor de Lottie
export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideLottieOptions({
      player: playerFactory, // Configura el reproductor
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
