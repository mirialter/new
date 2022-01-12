import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AddCategoryModule } from '../add-category/add-category.module';
import { AddBookmarkModule } from '../add-bookmark/add-bookmark.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule  } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const materialModules = [
  MatSliderModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    AddCategoryModule,
    AddBookmarkModule,
    materialModules

    
    // MatTreeFlatDataSource, MatTreeFlattener,FlatTreeControl
  ],
  exports:[BookmarkComponent]
})
export class BookmarkModule { }
