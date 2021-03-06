import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountdownModule } from './countdown/countdown.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
