import {Injectable} from '@angular/core';
import {Book} from './mock-book';

@Injectable()
export class MockDavisCupService {

    getBooks() {
        return Promise.resolve(Book);
    }
}