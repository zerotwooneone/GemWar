import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JsonService } from './json.service';

@Injectable()
export class JsonLinkService {
  constructor(private domSanitizer: DomSanitizer,
    private jsonService: JsonService) {}

  getObjectUrl(obj: any): SafeResourceUrl {
    const json = this.jsonService.stringify(obj);
    const file = new Blob([json], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    const result = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    return result;
  }
}
