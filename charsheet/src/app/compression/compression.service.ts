import { Injectable } from '@angular/core';
import {LZStringService} from 'ng-lz-string';

@Injectable()
export class CompressionService {
  constructor(private lzStringService: LZStringService) {}

  compress(uncompressed: string): string {
    return this.lzStringService.compress(uncompressed);
  }

  decompress(compressed: string): string {
    return this.lzStringService.decompress(compressed);
  }
}
