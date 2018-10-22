import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-tags',
  templateUrl: './widget-tags.component.html',
  styleUrls: ['./widget-tags.component.css']
})
export class WidgetTagsComponent implements OnInit {
  @Input() tags: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
