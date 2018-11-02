import {Injectable} from '@angular/core';

@Injectable()
export class PostProto {
  private _id: string;
  private _title: string;
  private _permalink: string;
  private _description: string;
  private _body: string;
  private _tags: Array<string>;
  private _author: string;
  private _commentList: Array<CommentProto>;
  private _views: number;
  private _comments: number;
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

  get permalink(): string {
    return this._permalink;
  }

  set permalink(value: string) {
    this._permalink = value;
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

  get commentList(): Array<CommentProto> {
    return this._commentList;
  }

  set commentList(value: Array<CommentProto>) {
    this._commentList = value;
  }

  get views(): number {
    return this._views;
  }

  set views(value: number) {
    this._views = value;
  }

  get comments(): number {
    return this._comments;
  }

  set comments(value: number) {
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
