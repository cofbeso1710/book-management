import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector:'book-component',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    constructor (private authService: AuthService, private router: Router) {}

    logout() {
        this.authService.logout();
        console.log('Xóa token',)
      }

    selectedComponent: string = 'book-management';
    selectComponent(componentName: string) {
    this.selectedComponent = componentName;
    
}
}