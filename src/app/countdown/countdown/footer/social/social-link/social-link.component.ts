import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
})
export class SocialLinkComponent implements OnInit {
  @Input() icon: IconName = 'facebook-square';
  @Input() link: string = '';
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
