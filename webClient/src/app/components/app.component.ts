import {Component, OnInit} from '@angular/core';
import {DavisCupService} from './../services/book.service';
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
        providers: [HttpModule, DavisCupService]
    })


export class AppComponent implements OnInit{

    constructor(private _davisService : DavisCupService){}

    errorMessage: string;
    davisCups : Book[];
    public title = 'Book List';

    getDavisCups(){

       /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        this._davisService.getDavisCups().subscribe(
            davis => this.davisCups = davis,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getDavisCups();
    }

} // export -> create a module


