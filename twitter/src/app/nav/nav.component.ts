import { Component } from '@angular/core';

interface ItemNav {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  nav: ItemNav[] = [
    { name: 'Inicio', icon: 'fas fa-home' },
    { name: 'Explorar', icon: 'fas fa-hashtag' },
    { name: 'Notificaciones', icon: 'far fa-bell' },
    { name: 'Mensajes', icon: 'far fa-comment-alt' },
    { name: 'Guardados', icon: 'far fa-bookmark' },
    { name: 'Listas', icon: 'far fa-list-alt' },
    { name: 'Perfil', icon: 'far fa-user' },
  ];
}
