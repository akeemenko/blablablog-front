import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicComponent} from './public.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import {PublicGuard} from './public.guard';
import {TopMenuComponent} from '../static/top-menu/top-menu.component';
import {FooterComponent} from '../static/footer/footer.component';
import {PublicService} from './public-service';
import {WidgetLastPostComponent} from '../static/right-aside/widget-last-post/widget-last-post.component';
import {AsideComponent} from '../static/right-aside/aside/aside.component';
import {WidgetTagsComponent} from '../static/right-aside/widget-tags/widget-tags.component';
import {WidgetSearchComponent} from '../static/right-aside/widget-search/widget-search.component';
import {NgxSummernoteModule} from 'ngx-summernote';

// определение маршрутов
const appRoutes: Routes = [
  {
    path: '',
    canActivate: [PublicGuard],
    component: PublicComponent,
    children:
      [
        {path: '', component: HomeComponent},
        {path: 'blog', component: BlogComponent},
        {path: 'post/:permalink', component: PostComponent}
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
    PublicComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    TopMenuComponent,
    FooterComponent,
    AsideComponent,
    WidgetSearchComponent,
    WidgetLastPostComponent,
    WidgetTagsComponent,
  ],
  providers: [
    PublicService,
    PublicGuard
  ]
})
export class PublicModule {
}
