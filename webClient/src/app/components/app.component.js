"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_service_1 = require('./../services/book.service');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(_bookService) {
        this._bookService = _bookService;
        this.title = 'Book List';
    }
    AppComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBooks().subscribe(function (book) { return _this.books = book; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{title}}</h1>\n      <h2>Book List</h2>\n      <ul>\n          <li *ngFor=\"let book of books\">\n              {{book.title}}, {{book.author}}, {{book.isbn}}, {{book.pulishYear}}\n         </li>\n      </ul>\n    ",
            providers: [http_1.HttpModule, book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent; // export -> create a module
//# sourceMappingURL=app.component.js.map