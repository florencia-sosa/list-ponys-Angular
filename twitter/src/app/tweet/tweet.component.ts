import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface Tweet {
  name: string;
  user: string;
  text: string;
  img: string;
  like: boolean;
}

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  tweet: Tweet = {
    like: false,
    name: 'Flor',
    text: '',
    user: '@florenciasd',
    img: 'https://t2.ea.ltmcdn.com/es/images/2/7/7/mi_gato_no_me_quiere_por_que_y_que_hacer_24772_600_square.jpg',
  };
  @Output() emitTweet = new EventEmitter<Tweet>();

  escribirTweet() {
    if (this.tweet.text.trim() !== '') {
      this.emitTweet.emit({ ...this.tweet });
      this.tweet.text = '';
    }
  }
}
