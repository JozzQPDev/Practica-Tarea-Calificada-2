import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSection } from './header-section/header-section';
import { HeroSection } from './hero-section/hero-section';
import { ProductsSection } from './products-section/products-section';
import { ServicesSection } from './services-section/services-section';
import { BlogsSection } from './blogs-section/blogs-section';
import { PartnersSection } from './partners-section/partners-section';
import { FooterSection } from './footer-section/footer-section';

@Component({
  imports: [
    RouterOutlet,
    HeaderSection,
    HeroSection,
    ProductsSection,
    ServicesSection,
    BlogsSection,
    PartnersSection,
    FooterSection
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Practica-I');
}
