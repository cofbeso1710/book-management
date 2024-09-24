import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], name: string, status: string): Book[] {
    if (!name && status === 'Tất cả') {
      return books;
    }

    return books.filter(book => {
      const matchesName = name ? book.name.toLowerCase().includes(name.toLowerCase()) : true;
      const matchesStatus = status === 'Tất cả' ? true : book.status === status;
      return matchesName && matchesStatus;
    });
  }

}
