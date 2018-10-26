import { Component, OnInit } from '@angular/core';
import {PublicService} from '../public-service';
import {PostProto} from '../../models/post-proto';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Array<PostProto>;
  constructor(private service: PublicService) {
    this.service.getLastPosts(4).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}
