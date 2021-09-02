import { Component } from '@angular/core';
interface New {
  theme: string;
  title: string;
  img?: string;
  numberTweets?: string;
}
interface Profile {
  name: string;
  user: string;
  img: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  profiles: Profile[] = [
    { name: 'Felix',user:'@ffelix', img:'https://i.pinimg.com/474x/83/e6/37/83e637278f2bad94131e6e7b8ad3967e.jpg' },
    { name: 'Garfield',user:'@garfield2', img:'https://styles.redditmedia.com/t5_2t0pp/styles/communityIcon_585xpxzi4si61.png' },
    { name: 'Silvestre', user: '@silvestre', img: 'https://www.cartonionline.com/gif/CARTOON/warner%20bros/silvestropensa.jpg' },
  ];
  news: New[] = [
    {
      theme: 'Celebridad',
      title: 'Fans Celebran el cumpleaños de Zendaya 🎂',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjDHt_eehvfESMPflENhcSQ6GuU8SB_jeLg&usqp=CAU',
      numberTweets: '154.212 tweets',
    },
    {
      theme: 'Tendencia en Argentina ',
      title: 'Mercado Libre 💲',
      numberTweets: '122.154 tweets',
    },
    {
      theme: 'Tendencia en Ciudad Autónoma de Buenos Aire',
      title: 'Santa Rosa ⛈️',
      numberTweets: '122.154 tweets',
    },
    {
      theme: 'Tendencia en Argentina',
      title: 'L-gante',
      numberTweets: '122.154 tweets',
    },
  ];
}
