export class HttpResponseObject {
    private _code: number;
    private _message: string;
    private _data: Object;

    constructor(code: number, message: string, data:object) {
        this._code = code;
        this._message = message;
        this._data = data;
    }
    
    get code(): number { return this._code; }
    get message(): string { return this._message; }
    get data(): Object { return this._data; }
}