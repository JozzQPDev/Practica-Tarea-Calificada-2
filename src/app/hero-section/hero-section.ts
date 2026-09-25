import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  imports: [],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {

  HeroSocial: Hero[] = [
    { label: 'Twitter', url: 'https://twitter.com' },
    { label: 'Linkedin', url: 'https://linkedin.com' },
    { label: 'Facebook', url: 'https://facebook.com' },
    { label: 'Instagram', url: 'https://instagram.com' }
  ];
}
