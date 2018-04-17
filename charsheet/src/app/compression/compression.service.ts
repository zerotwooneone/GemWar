import { Injectable } from '@angular/core';
import LZString = require('lz-string');

@Injectable()
export class CompressionService {
  constructor() {}

  compress(uncompressed: string): string {
    return LZString.compress(uncompressed);
  }

  decompress(compressed: string): string {
    return LZString.decompress(compressed);
  }
}
