import { Observable } from 'rxjs/Observable';

export class SaveResult {
    constructor(private _sheetId: Observable<string>) { }
    get sheetId(): Observable<string> {
        return this._sheetId;
    }
}
