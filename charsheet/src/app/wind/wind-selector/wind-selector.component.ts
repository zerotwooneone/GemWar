import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BubbleModel } from './bubble-model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zh-wind-selector',
  templateUrl: './wind-selector.component.html',
  styleUrls: ['./wind-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WindSelectorComponent),
      multi: true
    }
  ]
})
export class WindSelectorComponent implements OnInit, ControlValueAccessor {
  @Input() count: number;
  @Input() windTotal: number;
  bubbles: BubbleModel[];
  get pulse(): boolean {
    return this.pulsePoint && this._currentWind >= this.pulsePoint;
  }
  get pulsePoint(): number {
    return this.windTotal / 2;
  }
  _currentWind = 0;

  get currentWind(): number {
    return this._currentWind;
  }
  @Input() set currentWind(val) {
    this._currentWind = val;
    this.propagateChange(this._currentWind);
  }


  constructor() { }

  ngOnInit() {
    this.bubbles = [];
    for (let index = 0; index < this.count; index++) {
      const bubbleModel = new BubbleModel();
      bubbleModel.onClick = this.createClickHandler(index, bubbleModel);
      this.bubbles.push(bubbleModel);
    }
  }

  onBubbleClick(index: number, bubbleModel: BubbleModel) {
    let startIndex: number = 0;
    let lastIndex: number = this.bubbles.length - 1;
    const doCheck = !bubbleModel.checked;
    if (bubbleModel.checked) {
      startIndex = index;
    } else {
      lastIndex = index;
    }
    for (let bi = startIndex; bi <= lastIndex; bi++) {
      const bubble = this.bubbles[bi];
      bubble.checked = doCheck;
    }

    const newSelectedValue = bubbleModel.checked ? index + 1 : index;
    this.currentWind = newSelectedValue;
  }

  createClickHandler(index: number, bubbleModel: BubbleModel): () => void {
    return () => {
      this.onBubbleClick(index, bubbleModel);
    };
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.currentWind = value;
      if (this._currentWind > 0) {
        const bubbleModel = this.bubbles[this._currentWind - 1];
        bubbleModel.onClick();
      }
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => { };

  registerOnTouched() { }

}
