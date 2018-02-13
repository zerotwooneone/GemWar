import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BubbleModel } from './bubble-model';

@Component({
  selector: 'zer-wind-selector',
  templateUrl: './wind-selector.component.html',
  styleUrls: ['./wind-selector.component.scss']
})
export class WindSelectorComponent implements OnInit, OnChanges {
  @Input() maxIndex: number;
  bubbles: BubbleModel[];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const maxindexKey = 'maxIndex';
        if (propName === maxindexKey) {
          this.bubbles = [];
          const maxIndexChange = changes[maxindexKey];
          const maxIndex = maxIndexChange.currentValue;
          for (var index = 0; index <= maxIndex; index++) {
            const bubbleModel = new BubbleModel();
            bubbleModel.onClick = this.createClickHandler(index, bubbleModel);
            this.bubbles.push(bubbleModel);
          }
        }
      }
    }
  }

  onBubbleClick(index: number, bubbleModel: BubbleModel) {
    if (bubbleModel.checked) {

    } else {

    }
  }

  createClickHandler(index: number, bubbleModel: BubbleModel): () => void {
    return () => { this.onBubbleClick(index, bubbleModel); }
  }

}
