import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from './../model/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookService {

    constructor (private http: Http) {}

    private _bookServiceUrl = 'http://localhost:8080/result_list';  // URL to web api
    getBooks() {
        return this.http.get(this._bookServiceUrl)
            .map(res => <Book[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}