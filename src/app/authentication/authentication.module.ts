import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [HttpClientModule],
})
export class AuthenticationModule {
  static loadConfig(configuration: TokenConfiguration): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        {
          provide: HttpXhrBackend,
          useFactory: () => {
            return new AuthenticationService(configuration);
          }
        }
      ]
    };
  }
}


