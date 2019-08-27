export class AuthenticationService {
    constructor(private configuration: TokenConfiguration) {
        console.log('Configuration: ', this.configuration);
    }
}
