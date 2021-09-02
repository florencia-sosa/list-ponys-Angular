import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet/tweet.component';

interface Item {
  id: string;
  name: string;
  callback: (tweet: Tweet) => void;
  full?: string;
}

@Component({
  selector: 'app-tweet-public',
  templateUrl: './tweet-public.component.html',
  styleUrls: ['./tweet-public.component.css'],
})
export class TweetPublicComponent {
  itemAction: Item[] = [
    { id: 'comment', name: 'far fa-comment', callback: () => {} },
    { id: 'retweet', name: 'fas fa-retweet', callback: () => {} },
    {
      id: 'like',
      name: 'far fa-heart',
      full: 'fas fa-heart red',
      callback: (tweet: Tweet) => {
        tweet.like = !tweet.like;
      },
    },
    { id: 'share', name: 'fas fa-share-alt', callback: () => {} },
  ];

  @Input() tweets: Tweet[] = [];
}
