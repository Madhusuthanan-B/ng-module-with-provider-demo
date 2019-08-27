import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';

// This configuration is here for demo. In actual projects, these could be in environment files
const tokenConfiguration: TokenConfiguration = {
  timeOutInSeconds: 5,
  scope: 'implicit',
  tokenUrl: ''
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthenticationModule.loadConfig(tokenConfiguration),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

