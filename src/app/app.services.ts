import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
    name_search_api_url:string ="http://www.omdbapi.com/?i=tt3896198&apikey=278cec61&s=";
    search_name:string = null;
    id_search_api_url:string ="http://www.omdbapi.com/?apikey=278cec61&i=";
    search_id:string = null;
    
    constructor(private http: HttpClient) { }

    getMovieByName(name:string){
        this.search_name = this.name_search_api_url + name;
        return this.http.get(this.search_name);
    }
    getMovieById(id:string){
        this.search_id = this.id_search_api_url + id;
        return this.http.get(this.search_id);
    }
}
