import { Component, OnInit } from '@angular/core';
import { ISocialNetwork } from 'src/app/shared/interfaces/ISocialNetwork';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  socialNetworks: ISocialNetwork[] = [
    {
      icon: 'facebook-square',
      link: 'https://facebook.com/',
      name: 'Facebook',
    },
    {
      icon: 'pinterest',
      link: 'https://pinterest.com',
      name: 'Pinterest',
    },
    {
      icon: 'instagram',
      link: 'https://instagram.com',
      name: 'Instagram',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
