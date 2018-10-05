import {Injectable} from '@angular/core';

@Injectable()
export class PostProto {
  private _id: string;
  private _title: string;
  private _permaLink: string;
  private _description: string;
  private _body: string;
  private _tags: Array<string>;
  private _author: string;
  private _comments: Array<CommentProto>;
  private _createTimestamp: number;
  private _updateTimestamp: null;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get permaLink(): string {
    return this._permaLink;
  }

  set permaLink(value: string) {
    this._permaLink = value;
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

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get comments(): Array<CommentProto> {
    return this._comments;
  }

  set comments(value: Array<CommentProto>) {
    this._comments = value;
  }

  get createTimestamp(): number {
    return this._createTimestamp;
  }

  set createTimestamp(value: number) {
    this._createTimestamp = value;
  }

  get updateTimestamp(): null {
    return this._updateTimestamp;
  }

  set updateTimestamp(value: null) {
    this._updateTimestamp = value;
  }
}


@Injectable()
export class CommentProto {
  private _author: string;
  private _message: string;
  private _createTimestamp: number;

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get createTimestamp(): number {
    return this._createTimestamp;
  }

  set createTimestamp(value: number) {
    this._createTimestamp = value;
  }
}
