import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookmarkComponent } from './add-bookmark.component';


import { MatButtonModule } from '@angular/material/button';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddBookmarkComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule

  ],
  exports:[AddBookmarkComponent]
})
export class AddBookmarkModule { }
