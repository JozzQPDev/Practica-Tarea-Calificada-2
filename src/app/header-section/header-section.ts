import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './header-section.css',
  templateUrl: './header-section.html',
})
export class HeaderSection {
  isScrolled = false;

  navigationItems: Header[] = [
    { label: 'Home', route: '#home' },
    { label: 'Products', route: '#products' },
    { label: 'Services', route: '#services' },
    { label: 'Blogs', route: '#blogs' },
    { label: 'About Us', route: '#about-us' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
