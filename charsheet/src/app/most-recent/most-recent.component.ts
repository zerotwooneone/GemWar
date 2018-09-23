import { Component, OnInit } from '@angular/core';
import { MostRecentService } from './most-recent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'zh-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.scss']
})
export class MostRecentComponent implements OnInit {

  constructor(private mostRecentService: MostRecentService,
    private router: Router) { }

  ngOnInit() {
    const mostRecent = this.mostRecentService.get();
    if (mostRecent) {
      this.router.navigate(['/char', mostRecent]);
    } else {
      this.router.navigate(['/new'], { skipLocationChange: true });
    }
  }

}
