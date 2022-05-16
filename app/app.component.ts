import { Component,OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {List} from './List';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns = ['fullname', 'date', 'category','brand','model','type'];
  dataSource = new MatTableDataSource();
  limit:number = 10;
  skip:number = 0;
  totalLength:number = 0;
  pageIndex : number = 0;
  pageLimit:number[] = [5, 10] ; 


  constructor(private http: HttpClient){
    this.dataSource.data = List;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


