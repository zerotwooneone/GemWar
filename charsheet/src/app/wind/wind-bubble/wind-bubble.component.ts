import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zer-wind-bubble',
  templateUrl: './wind-bubble.component.html',
  styleUrls: ['./wind-bubble.component.scss']
})
export class WindBubbleComponent implements OnInit {

  @Input() checked: boolean;
  @Output() onClicked = new EventEmitter<boolean>();

  get checkedHidden(): boolean {
    return !this.checked;
  }
  get uncheckedHidden(): boolean {
    return this.checked;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick():void {
    this.onClicked.emit();
  }

}
