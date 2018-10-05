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
        {path: 'post', component: PostComponent}
      ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    TopMenuComponent,
    FooterComponent
  ],
  providers: [
    PublicService,
    PublicGuard
  ]
})
export class PublicModule {
}
