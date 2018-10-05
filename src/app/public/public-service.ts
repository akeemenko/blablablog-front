import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {PostProto} from '../../models/post-proto';
import {BlablablogDefaults} from '../defaults/blablablog-defaults';
import {map} from 'rxjs/operators';

@Injectable()
export class PublicService {
  constructor(private http: HttpClient,
              private router: Router) {
    console.log('initialize public service');
  }

  /**
   * Get all hotPosts
   * @returns list of hotPosts
   */
  public getPosts() {
    return this.http.get<Array<PostProto>>(BlablablogDefaults.SERVER_ADDRESS + 'public/posts/', {
    }).pipe(map((data: Array<PostProto>) => {
      console.log('initialize posts', data);
      return data;
    }));
  }

  /**
   * Get hot posts
   * @param limit limit
   * @returns list of posts
   */
  public getHotPosts(limit: number) {
    return this.http.get<Array<PostProto>>(BlablablogDefaults.SERVER_ADDRESS + 'public/posts/hot', {
      params: new HttpParams().set('limit', limit.toString())
    }).pipe(map((data: Array<PostProto>) => {
      console.log('initialize hot posts', data);
      return data;
    }));
  }

  /**
   * Get last posts
   * @param limit limit
   * @returns list of posts
   */
  public getLastPosts(limit: number) {
    return this.http.get<Array<PostProto>>(BlablablogDefaults.SERVER_ADDRESS + 'public/posts/last', {
      params: new HttpParams().set('limit', limit.toString())
    }).pipe(map((data: Array<PostProto>) => {
      console.log('initialize last posts', data);
      return data;
    }));
  }
}
