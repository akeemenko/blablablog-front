import { Component, OnInit } from '@angular/core';
import {PublicService} from '../public-service';
import {ActivatedRoute} from '@angular/router';
import {PostProto} from '../../models/post-proto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  permalink: string;
  post: PostProto;

  constructor(private service: PublicService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.permalink = params['permalink'];
      this.loadPost();
    });

  }

  ngOnInit() {
  }

  /**
   * Load post by permalink
   */
  loadPost() {
    this.service.getPostByPermalink(this.permalink).subscribe(data => {
      this.post = data;
    });
  }
}
