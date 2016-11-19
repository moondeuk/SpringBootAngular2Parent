import {Component, OnInit} from '@angular/core';
import {BookService} from './../services/book.service';
import {Book} from '../model/book';
import {HttpModule} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Book List</h2>
      <ul>
          <li *ngFor="let book of books">
              {{book.title}}, {{book.author}}, {{book.isbn}}, {{book.pulishYear}}
         </li>
      </ul>
    `,
        providers: [ HttpModule, BookService ]
    })

export class AppComponent implements OnInit{

    constructor(private _bookService : BookService){}

    errorMessage: string;
    books : Book[];
    public title = 'SpringBoot, Angular2, Starter Web';

    getBooks(){

        this._bookService.getBooks().subscribe(
            book => this.books = book,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getBooks();
    }

} // export -> create a module


