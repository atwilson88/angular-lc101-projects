import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Liar Liar', 'Dark Knight', 'Who Framed Roger Rabbit', 'Kill Bill Vol. 1'];

   constructor() { }

   ngOnInit() {
   }

}
