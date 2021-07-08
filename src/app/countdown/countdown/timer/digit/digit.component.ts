import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitComponent implements OnInit {
  @Input() digit: number;
  @Input() unit: string;

  constructor() {}

  ngOnInit(): void {}
}
