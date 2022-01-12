import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-mark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {


  constructor(private s: BookmarkService, private formBuilder: FormBuilder) { }
  allData: any[] = []
  flagEnterCategory = false;
  flagNewCategory = false;

  flagEnterBookmark = false
  bookmark = false

  ngOnInit(): void {
    this.init();
  }

  start(link: string) {
    console.log(link);
    window.open(link)
  }
  enterCategory() {
    this.flagEnterCategory = true;
  }
  closeCategory() {
    
    this.flagEnterCategory = false;
    this.flagNewCategory = false;
    this.init();
  }
  newCategory() {
    this.flagNewCategory = true
  }

  init() {
    this.s.getData().subscribe(ans => {
      this.allData = ans;
      console.log(ans);
    })
  }

  enterBookmark() {
    this.flagEnterBookmark = true
  }
  closeBookmark() {
    
    this.flagEnterBookmark = false;
    this.flagNewCategory = false;
    this.init();
  }
  newBookmark() {
    this.flagNewCategory = true
  }
}
