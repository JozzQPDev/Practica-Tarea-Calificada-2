import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Services } from './services'; // Tu interfaz base

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule], // Solo CommonModule para usar [ngClass] y @for
  styleUrl: './services-section.css',
  templateUrl: './services-section.html',
})
export class ServicesSection implements OnInit {
  private sanitizer = inject(DomSanitizer);

  // Tus vectores SVG nativos con el estándar XMLNS de la W3C corregido
  private rawServices = [
    {
      title: 'Marketing Structure',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum.',
      icon: `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>`
    },
    {
      title: 'Distribution Network',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum.',
      icon: `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`
    },
    {
      title: 'Business Development',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum.',
      icon: `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941M3.75 15.75h16.5m-16.5-4.5h16.5m-16.5-4.5h16.5" /></svg>`
    },
    {
      title: 'Technical Support',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum.',
      icon: `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655M15.12 11.374l1.36-1.654c.291-.354.524-.762.685-1.216m-4.04 2.87l-1.216-.685A4.922 4.922 0 019.234 6.13l1.654-1.36a2.548 2.548 0 113.586 3.586l-1.354 1.653z" /></svg>`
    },
    {
      title: 'E Procurement',
      description: 'Lorem Ipsum is simply dummy text of the prints ring and typesetting industry. Lorem Ipsum.',
      icon: `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>`
    }
  ];

  services: any[] = [];

  ngOnInit(): void {
    // Validamos los SVGs para que no los borre el DOM de Angular
    this.services = this.rawServices.map(item => ({
      title: item.title,
      description: item.description,
      iconSafeHtml: this.sanitizer.bypassSecurityTrustHtml(item.icon)
    }));
  }
}
