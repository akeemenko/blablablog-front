import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {PostProto} from '../models/post-proto';
import {BlablablogDefaults} from '../defaults/blablablog-defaults';
import {CreatePostRequest} from '../protos/create-post-request';


@Injectable()
export class PrivateService {
  constructor(private http: HttpClient,
              private router: Router) {
    console.log('initialize private service');
  }

  /**
   * Get all hotPosts
   * @returns list of hotPosts
   */
  public getPosts() {
    return this.http.get<Array<PostProto>>(BlablablogDefaults.SERVER_ADDRESS + 'public/posts/', {}).pipe(map((data: Array<PostProto>) => {
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


  /**
   * Get post by permalink
   * @returns post proto
   */
  public getPostByPermalink(permalink: string) {
    return this.http.get<PostProto>(BlablablogDefaults.SERVER_ADDRESS + 'public/posts/', {
      params: new HttpParams().set('permalink', permalink.toString())
    }).pipe(map((data: PostProto) => {
      console.log('initialize post', data);
      return data;
    }));
  }



  public createPost(request: CreatePostRequest) {
    return this.http.post(BlablablogDefaults.SERVER_ADDRESS + 'private/create-post', request.toJsonString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
}


