import { Injectable } from '@angular/core'; 

@Injectable({
    providedIn: 'root' 
  })
export class ApiConfig {
    _config = {

        booksURL: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tFeLydZydNx6vNEV1kDMU2sHBdJ6KjU8',
        moviesURL: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=Ec58xUiVX12JsXo3GGPl0SAa1ATR8Kv9'
    }

    // get setting():{[key:string]:any}{
    //     return this._config
    // }

}