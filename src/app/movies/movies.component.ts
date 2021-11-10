import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  constructor(private readonly dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getMovieData().subscribe((res: any) => {
      this.movies = res?.results;
    });
  }

}
