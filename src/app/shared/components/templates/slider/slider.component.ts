import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {register} from 'swiper/element/bundle'
import { CardComponent } from '../card/card.component';
register()
@Component({
  selector: 'app-slider',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, CardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
 data:any[]= [
    {
        "title": "App de chats y post",
        "description": "Es una aplicación que tiene una versión móvil y web, que sirve para postear imágenes y enviar mensajes entre usuarios en tiempo real.",
        "image": "/assets/chat.png",
        "technologies": [
            {
                "name": "",
                "image": "/assets/angular.svg"
            },
            {
                "name": "PHP",
                "image": "/assets/php.svg"
            },
            {
                "name": "Firebase",
                "image": "/assets/fire.svg"
            },
            {
                "name": "",
                "image": "/assets/mysql.svg"
            },
        ],
        "demo_link": "#"
    },
    {
        "title": "Sistema de un colegio (FrontEnd)",
        "description": "Es un sistema que tiene módulo de asistencia, cursos, registros.",
        "image": "data:image/png;base6AABJRU5ErkJggg==",
        "technologies": [
            {
                "name": "Python",
                "image": "/assets/py.svg"
            },
            {
                "name": "",
                "image": "/assets/angular.svg"
            },
            {
                "name": "",
                "image": "/assets/mysql.svg"
            },
        ],
        "demo_link": "#"
    },
    {
        "title": "Sistema de ventas",
        "description": "Es un sistema que tiene módulo de registros y venta de productos.",
        "image": "data:image/jpeg;base64,/9j/4AqIBVFRRBSiiiD//Z",
        "technologies": [
            {
                "name": "",
                "image": "/assets/mysql.svg"
            },
            {
                "name": "",
                "image": "/assets/angular.svg"
            },
            {
                "name": "PHP",
                "image": "/assets/php.svg"
            }
        ],
        "demo_link": "#"
    },
    {
        "title": "Página web administrable (Proyecto Real)",
        "description": "Es una página web con un rendimiento mejorado y administrable.",
        "image": "/assets/luxury.png",
        "technologies": [
            {
                "name": "",
                "image": "/assets/angular.svg"
            },
            {
                "name": "Firebase",
                "image": "/assets/fire.svg"
            },
            {
                "name": "Tailwind CSS",
                "image": "/assets/tailwind.svg"
            },
        ],
        "demo_link": "#"
    }
]

}
