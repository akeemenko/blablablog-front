import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgxSummernoteModule} from 'ngx-summernote';
import {PrivateGuard} from './private.guard';
import {PrivateService} from './private-service';
import { UserPostsComponent } from './user-posts/user-posts.component';
import {TopMenuComponent} from './static/top-menu/top-menu.component';
import {FooterComponent} from './static/footer/footer.component';
import {AsideComponent} from './static/right-aside/aside/aside.component';
import {WidgetSearchComponent} from './static/right-aside/widget-search/widget-search.component';
import {WidgetLastPostComponent} from './static/right-aside/widget-last-post/widget-last-post.component';
import {WidgetTagsComponent} from './static/right-aside/widget-tags/widget-tags.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

// определение маршрутов
const appRoutes: Routes = [
  {
    path: 'cabinet',
    canActivate: [PrivateGuard],
    component: PrivateComponent,
    children:
      [
        {path: '', component: UserPostsComponent},
        {path: 'new-post', component: NewPostComponent},
        {path: 'post/:permalink', component: PostDetailsComponent},
      ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxSummernoteModule
  ],
  declarations: [
    PrivateComponent,
    TopMenuComponent,
    FooterComponent,
    AsideComponent,
    WidgetSearchComponent,
    WidgetLastPostComponent,
    WidgetTagsComponent,
    UserPostsComponent,
    NewPostComponent,
    PostDetailsComponent,
  ],
  providers: [
    PrivateService,
    PrivateGuard
  ]
})

export class PrivateModule { }
