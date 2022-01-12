import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  formGroup: FormGroup = {} as FormGroup ;
  my:Object | undefined

  @Output() myclose: EventEmitter<any> = new EventEmitter();
  @Output() mylogin: EventEmitter<any> = new EventEmitter();
  categories:string[] =[];

  constructor(private formBuilder: FormBuilder, private service: BookmarkService) { }

  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.formGroup  = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', [
        Validators.required,
        Validators.pattern(reg)
      ]],
      category: ['', [Validators.required]]
    });
    this.service.getCategory().pipe(
      tap(result => this.categories = result.map(({name})=> name))
    ).subscribe( );
    
  }

  save() {    
    this.my={category:{name:this.formGroup.value.category},newBookmark:{"name":this.formGroup.value.name,"url":this.formGroup.value.url}}
    this.service.addBookmark(this.my).pipe(
      tap(_=>  this.myclose.emit())
    ).subscribe(ans=>
      this.myclose.emit());
    console.log(this.my);
    
    

  }

  close() {
    this.myclose.emit()
  }




}
