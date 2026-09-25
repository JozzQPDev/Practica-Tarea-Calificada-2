import { Component } from '@angular/core';
import { Partners } from './partners';

@Component({
  imports: [],
  selector: 'app-partners-section',
  styleUrl: './partners-section.css',
  templateUrl: './partners-section.html',
})
export class PartnersSection {
  partners: Partners[] = [
    { name: 'ExxonMobil', logoUrl: 'img/partners/exxonmobil.png' },
    { name: 'Arkema', logoUrl: 'img/partners/arkema.png' },
    { name: '3M', logoUrl: 'img/partners/3m.png' },
    { name: 'SABIC', logoUrl: 'img/partners/sabic.png' },
    { name: 'Toray', logoUrl: 'img/partners/toray.png' }
  ];
}
