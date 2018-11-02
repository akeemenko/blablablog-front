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
  tags: Array<string> = [];


  constructor(private privatService: PrivateService) {
  }

  ngOnInit() {
    this.summernote = $('#summernote').summernote({
     // airMode: true
    });
  }

  /**
   * Save new post
   */
  onSaveClick() {
    if (!this.validate()) {
      return;
    }
    const request = new CreatePostRequest(this.title, this.titleImage, this.description, this.summernote.summernote('code'), this.tags);
    this.privatService.createPost(request).subscribe(() => {

    }, error => {
      let msg = 'error_server_not_answer';
      if (error.statusText !== 'Unknown Error') {
        msg = error.statusText;
      }
      console.log(error);
    });
  }

  /**
   * Validate input fields
   */
  validate(): boolean {
    if (this.titleImage.length === 0) {
      alert('you must add a title image');
      return false;
    }
    if (this.title.length === 0) {
      alert('you must add a title');
      return false;
    }
    /*if (this.tags.length === 0) {
      alert('you must add a tag');
      return false;
    }*/
    if (this.summernote.summernote('isEmpty')) {
      alert('you must add a body');
      return false;
    }
    if (this.description.length === 0) {
      alert('you must add a description');
      return false;
    }
    return true;
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
}
