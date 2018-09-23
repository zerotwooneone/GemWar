import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zh-wind-bubble',
  templateUrl: './wind-bubble.component.html',
  styleUrls: ['./wind-bubble.component.scss']
})
export class WindBubbleComponent implements OnInit {

  @Input() checked: boolean;
  @Output() zclicked = new EventEmitter<boolean>();

  get checkedHidden(): boolean {
    return !this.checked;
  }
  get uncheckedHidden(): boolean {
    return this.checked;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.zclicked.emit();
  }

}
