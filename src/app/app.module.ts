import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorsComponent } from './errors/errors.component';
import {PublicModule} from './public/public.module';
import { AsideComponent } from './static/right-aside/aside/aside.component';
import { WidgetSearchComponent } from './static/right-aside/widget-search/widget-search.component';
import { WidgetLastPostComponent } from './static/right-aside/widget-last-post/widget-last-post.component';
import { WidgetTagsComponent } from './static/right-aside/widget-tags/widget-tags.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '**', component: ErrorsComponent}
      ]
    ),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PublicModule
  ],
  declarations: [
    AppComponent,
    ErrorsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
