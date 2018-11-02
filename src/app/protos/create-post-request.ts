import {AbstractRequest} from './abstract-request';
import {Injectable} from '@angular/core';

@Injectable()
export class CreatePostRequest extends AbstractRequest {
  private _title: string;
  private _titleImage: string;
  private _description: string;
  private _body: string;
  private _tags: Array<string>;


  constructor(title: string, titleImage: string, description: string, body: string, tags: Array<string>) {
    super();
    this._title = title;
    this._titleImage = titleImage;
    this._description = description;
    this._body = body;
    this._tags = tags;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get titleImage(): string {
    return this._titleImage;
  }

  set titleImage(value: string) {
    this._titleImage = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get tags(): Array<string> {
    return this._tags;
  }

  set tags(value: Array<string>) {
    this._tags = value;
  }
}

