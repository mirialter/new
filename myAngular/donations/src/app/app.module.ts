import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookmarkModule } from './components/bookmark/bookmark.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
// import { UpdateDetailsComponent } from './components/page5/update-details/update-details.component';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BookmarkModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
