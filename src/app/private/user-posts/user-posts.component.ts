import { Component, OnInit } from '@angular/core';
import {PostProto} from '../../../models/post-proto';
import {PublicService} from '../../public/public-service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Array<PostProto>;
  constructor(private service: PublicService) {
    this.service.getLastPosts(4).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}
