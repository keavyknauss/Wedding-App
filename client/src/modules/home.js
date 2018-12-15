import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)
export class Home {
    constructor(router) {
        this.router = router;
        this.message = 'Home';
        this.header = 'test 1 2 3'
    }
    login() {
        this.router.navigate('users');
    }
}