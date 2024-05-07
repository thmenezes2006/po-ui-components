import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() placeholder: string = 'Choose an option';
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  selectedOption: any;

  ngOnInit() {
    this.selectedOption = '';
  }
  onChange(selectedValue: any) {
    this.selectedOption = selectedValue;
  }
}
