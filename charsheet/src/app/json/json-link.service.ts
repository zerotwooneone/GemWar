import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable()
export class JsonLinkService {
  constructor(private domSanitizer: DomSanitizer) {}

  getObjectUrl(obj: any): SafeResourceUrl {
    const json = JSON.stringify(obj);
    const file = new Blob([json], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    const result = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    return result;
  }
}
