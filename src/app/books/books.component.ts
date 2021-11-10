import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;

  constructor(private readonly dataService:DataService) {
   
   }

  ngOnInit(): void {
    this.dataService.getBookData().subscribe((res:any)=>{
      this.books=res?.results?.books;     
    });


      
  }

}
