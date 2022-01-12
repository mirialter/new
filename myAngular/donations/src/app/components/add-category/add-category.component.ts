import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    categoryName: ['', [Validators.required]]
  });
  my:Object | undefined
  @Output() myclose: EventEmitter<any> = new EventEmitter();
  
 
  constructor(private formBuilder: FormBuilder, private service: BookmarkService) { }

  ngOnInit(): void {    
  }

  save() {    
    this.my={"name":this.formGroup.value.categoryName,"bookmarks":[]}
    this.service.addCategory(this.my).pipe(
      tap(_=>  this.myclose.emit())
    ).subscribe(ans=>
      this.myclose.emit()
    );
  }

  close(){
     this.myclose.emit()
  }

}
