import { Injectable } from '@angular/core';

@Injectable()
export class FileReaderService {
  constructor() {}

  readAsText(blob: Blob): Promise<string> {
    const result = new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsText(blob);
      fileReader.onloadend = () => {
        const text = fileReader.result;
        resolve(text);
      };
    });
    return result;
  }
}
