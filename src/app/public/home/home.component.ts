import { Component, OnInit } from '@angular/core';
import {PublicService} from '../public-service';
import {PostProto} from '../../../models/post-proto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotPosts: Array<PostProto>;
  lastPosts: Array<PostProto>;

  constructor(private publicService: PublicService) {
    console.log('init home component');
    publicService.getHotPosts(3).subscribe(data => {
      this.hotPosts = data;
    });
    publicService.getLastPosts(3).subscribe(data => {
      this.lastPosts = data;
    });
  }

  ngOnInit() {
  }

}
