import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], title: string): Book[] {
    if (!title) {
      return books;
    }

    return books.filter(book => {
      const matchesName = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;
      return matchesName;
    });
  }

}
