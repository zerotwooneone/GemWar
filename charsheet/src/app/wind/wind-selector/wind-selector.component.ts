import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BubbleModel } from './bubble-model';

@Component({
  selector: 'zer-wind-selector',
  templateUrl: './wind-selector.component.html',
  styleUrls: ['./wind-selector.component.scss']
})
export class WindSelectorComponent implements OnInit, OnChanges {
  @Input() count: number;
  bubbles: BubbleModel[];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const maxindexKey = 'count';
        if (propName === maxindexKey) {
          this.bubbles = [];
          const countChange = changes[maxindexKey];
          const count = countChange.currentValue;
          for (var index = 0; index < count; index++) {
            const bubbleModel = new BubbleModel();
            bubbleModel.onClick = this.createClickHandler(index, bubbleModel);
            this.bubbles.push(bubbleModel);
          }
        }
      }
    }
  }

  onBubbleClick(index: number, bubbleModel: BubbleModel) {
    let startIndex: number = 0;
    let lastIndex: number = this.bubbles.length - 1;
    let doCheck = !bubbleModel.checked;
    if (bubbleModel.checked) {
      startIndex = index;
    } else {
      lastIndex = index;
    }
    for (let bi = startIndex; bi <= lastIndex; bi++) {
      let bubble = this.bubbles[bi];
      bubble.checked = doCheck;
    }
  }

  createClickHandler(index: number, bubbleModel: BubbleModel): () => void {
    return () => {
       this.onBubbleClick(index, bubbleModel);
    }
  }

}
