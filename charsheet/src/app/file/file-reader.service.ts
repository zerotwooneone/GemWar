import { Injectable } from '@angular/core';

@Injectable()
export class FileReaderService {
  constructor() {}

  readAsText(blob: Blob): Promise<string> {
    const result = new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const text = <string>fileReader.result;
        resolve(text);
      };
      fileReader.onerror = () => {
        reject('error reading file');
      };
      fileReader.onabort = () => {
        reject('aborted reading file');
      };

      fileReader.readAsText(blob);
    });
    return result;
  }
}
