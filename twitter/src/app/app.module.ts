import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetPublicComponent } from './tweet-public/tweet-public.component';
import { NewsComponent } from './news/news.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetPublicComponent,
    NewsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
