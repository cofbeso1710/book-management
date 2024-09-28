import { Component } from "@angular/core";

@Component({
    selector:'book-component',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    selectedComponent: string = 'book-management';
    selectComponent(componentName: string) {
    this.selectedComponent = componentName;
}
}