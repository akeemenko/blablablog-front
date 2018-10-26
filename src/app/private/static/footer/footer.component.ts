import { Component, OnInit } from '@angular/core';
import {PostProto} from '../../../models/post-proto';
import {PrivateService} from '../../private-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hotPosts: Array<PostProto>;

  constructor(private privateService: PrivateService) {
    privateService.getHotPosts(3).subscribe(data => {
      this.hotPosts = data;
    });
  }

  ngOnInit() {
  }

}
