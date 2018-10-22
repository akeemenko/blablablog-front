import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorsComponent } from './errors/errors.component';
import {PublicModule} from './public/public.module';
import {PrivateModule} from './private/private.module';

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
    PublicModule,
    PrivateModule
  ],
  declarations: [
    AppComponent,
    ErrorsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
