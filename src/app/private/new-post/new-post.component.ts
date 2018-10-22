import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  summernote: any;

  constructor() { }

  ngOnInit() {
    this.summernote = $('#summernote').summernote();
  }


  saveSummernote() {


    if (this.summernote.summernote('isEmpty')) {
      alert('editor content is empty');
    }


    const code = this.summernote.summernote('code');
    console.log(code);

    // $('#summernote').summernote('destroy');
  }

}
