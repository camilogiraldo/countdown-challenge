import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './countdown/header/header.component';
import { SocialComponent } from './countdown/footer/social/social.component';
import { SocialLinkComponent } from './countdown/footer/social/social-link/social-link.component';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TimerComponent } from './countdown/timer/timer.component';
import { DigitComponent } from './countdown/timer/digit/digit.component';
import { FooterComponent } from './countdown/footer/footer.component';

@NgModule({
  declarations: [
    CountdownComponent,
    HeaderComponent,
    SocialComponent,
    SocialLinkComponent,
    TimerComponent,
    DigitComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CountdownComponent],
})
export class CountdownModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fab);
  }
}
