import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'tertiary' | 'btn-border' | 'btn-solid' = 'btn-solid';
  @Input() color: 'danger' | 'primary' = 'primary';
  @Input() text: string;
  @Input() disabled: boolean = false;
  @Input() size: 'large' | 'small' | 'medium' = 'medium';
  @Input() type: string = 'submit';
  @Input() icon: string;

  clickAlert(text: string) {
    alert(`O botão ${text || ''}, foi clicado!`);
  }
  constructor() {}

  ngOnInit() {}
}
