import {Component, Input, OnInit} from '@angular/core';
import {PostProto} from '../../../../../models/post-proto';

@Component({
  selector: 'app-widget-last-post',
  templateUrl: './widget-last-post.component.html',
  styleUrls: ['./widget-last-post.component.css']
})
export class WidgetLastPostComponent implements OnInit {
  @Input() lastPosts: Array<PostProto>;

  constructor() { }

  ngOnInit() {
  }

}
