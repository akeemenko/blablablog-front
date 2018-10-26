import {Component, OnInit} from '@angular/core';
import {PrivateService} from '../private-service';
import {CreatePostRequest} from '../../protos/create-post-request';

declare let $: any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  summernote: any;
  title = '';
  titleImage = '';
  description = '';
  body = '';
  tags: Array<string>;
  request: CreatePostRequest = new CreatePostRequest();


  constructor(private privatService: PrivateService) {
  }

  ngOnInit() {
    this.summernote = $('#summernote').summernote();
  }

  saveSummernote() {
    if (this.summernote.summernote('isEmpty')) {
      alert('editor content is empty');
    }
    const code = this.summernote.summernote('code');
    console.log(code);
  }

  /**
   * Handle file upload
   * @param e event
   */
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  /**
   * Read file
   */
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.titleImage = reader.result;
  }


  createPost() {
    if (!this.validate()) {
      return;
    }

    this.privatService
  }

  /**
   * Validate input fields
   * @returns {boolean}
   */
  validate(): boolean {
    if (this.titleImage.length == 0) {
      alert('you must add a title image');
      return false;
    }
    if (this.title.length == 0) {
      alert('you must add a title');
      return false;
    }
    if (this.tags.length == 0) {
      alert('you must add a tag');
      return false;
    }
    if (this.body.length == 0) {
      alert('you must add a body');
      return false;
    }
    if (this.description.length == 0) {
      alert('you must add a description');
      return false;
    }
    return true;
  }
}
