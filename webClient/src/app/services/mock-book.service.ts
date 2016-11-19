import {Injectable} from '@angular/core';
import {BOOKS} from './mock-book';

@Injectable()
export class MockDavisCupService {

    getBooks() {
        return Promise.resolve(BOOKS);
    }
}