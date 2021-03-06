import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from './products/product-list.component'
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { Http } from '@angular/http';
 
@NgModule({
  imports: [ BrowserModule, FormsModule, Http ],
  declarations: [ AppComponent,
  ProductListComponent,
  ProductFilterPipe,
  StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
