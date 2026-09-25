import { Component } from '@angular/core';
import { Blogs } from './blogs';

@Component({
  imports: [],
  selector: 'app-blogs-section',
  styleUrl: './blogs-section.css',
  templateUrl: './blogs-section.html',
})
export class BlogsSection {
  blogs: Blogs[] = [
    {
      title: 'Loreem Ipsum is simply dummy text',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy.',
      imageUrl: 'img/news1.png', // Reemplaza con tus imágenes reales
      likes: 4,
      comments: 1,
      date: '12 Jun 24'
    },
    {
      title: 'Loreem Ipsum is simply dummy text',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy.',
      imageUrl: 'img/news2.png',
      likes: 2,
      comments: 1,
      date: '12 Jun 24'
    },
    {
      title: 'Loreem Ipsum is simply dummy text',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy.',
      imageUrl: 'img/news3.png',
      likes: 23,
      comments: 16,
      date: '12 Jun 24'
    }
  ];
}
