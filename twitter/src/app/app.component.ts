import { Component } from '@angular/core';
import { Tweet } from './tweet/tweet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'twitter';
  tweets: Tweet[] = [
    {
      like: false,
      name: 'Don Quijote',
      text: 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas.',
      user: '@Don_Quijote',
      img: 'https://i.pinimg.com/736x/de/f9/e8/def9e891c7461974c92490e6b74724c0.jpg',
    },
    {
      like: false,
      name: 'J. werther',
      text: 'Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia. Estoy solo, y me felicito de vivir en este país, ',
      user: '@joven_Werther',
      img: 'https://i.pinimg.com/736x/11/49/fa/1149fa7912c54e89a5c3aa3023d77721.jpg',
    },
    {
      like: false,
      name: 'Kafka',
      text: 'Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado de espaldas sobre un duro caparazón y, al alzar la cabeza, vio.',
      user: '@F-kafka',
      img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple1/v4/0c/dd/e0/0cdde0ef-3151-2adb-afbc-bc0ffaace9ce/source/256x256bb.jpg',
    },
    {
      like: false,
      name: 'Europe',
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in l',
      user: '@EuropeL',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjiWIXL2yAhWNCKeetIVjhaXOuN-lgvDMeA&usqp=CAU',
    },
  ];
  pushTweet(tweet: Tweet) {
    // this.tweets.push(tweet);
    this.tweets = [tweet, ...this.tweets];
  }
}
