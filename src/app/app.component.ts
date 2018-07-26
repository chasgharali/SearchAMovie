import { Component } from '@angular/core';
import { AppService } from './app.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appservice: AppService) { }
  search_name: string;
  movies_list = [];
  selected_movie = null;
  selected_poster = null;
  
  search() {
    this.appservice.getMovieByName(this.search_name).subscribe(res => {
      this.movies_list = [];
      this.selected_movie = null;
      this.selected_poster = null;
      var tmpMovies = (res as any).Search;
     
      if(!tmpMovies)
        return

      for (var i = 0; i < tmpMovies.length; i++) {
        if(i == 3) return;
        this.movies_list.push(tmpMovies[i]);
      }
      
    });
  }

  transformToArray(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      if(key == "Poster"){
        this.selected_poster = value[key];
        continue;
      }
      if(key== "Ratings"){
        keys.push({key: key, value: value[key][0].Value});  
        continue;
      }
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

  getDetail(id){
    this.appservice.getMovieById(id).subscribe(res => {
      this.selected_movie = this.transformToArray(res ,[]);
    });
  }

  Back(){
    this.selected_movie = null;
    this.selected_poster = null;
  }
}
