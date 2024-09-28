import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './app/book/book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], title: string, author: string): Book[] {
    if (!title && !author) {
      return books;
    }

    return books.filter(book => {
      const matchesNameBook = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesNameAuthor = author ? book.author.toLowerCase().includes(author.toLowerCase()) : true;
      return matchesNameBook && matchesNameAuthor;
    });
  }

}
