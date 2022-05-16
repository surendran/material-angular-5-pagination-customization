import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientModule}from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatTableModule,MatPaginatorModule,MatTooltipModule,BrowserAnimationsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {








 }
