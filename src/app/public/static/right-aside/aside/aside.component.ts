import { Component, OnInit } from '@angular/core';
import {BlablablogDefaults} from '../../../../defaults/blablablog-defaults';
import {PostProto} from '../../../../models/post-proto';
import {PublicService} from '../../../public-service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  tags = BlablablogDefaults.TAGS;
  lastPosts: Array<PostProto>;

  constructor(public service: PublicService) {
    service.getLastPosts(3).subscribe(data => {
      this.lastPosts = data;
    });
  }

  ngOnInit() {
  }

}
