import { DataSerialize } from "./data-serialize";

export class Song implements DataSerialize {

    private title: string;
    private picture: Picture;
    private duration: string;

    constructor(json?: any) {
        this.title = json.title || null;
        this.duration = json.duration || null;
        this.picture = new Picture(json.picture || null)
    }

    toJson() {
        return {
            "title": this.title,
            "picture": this.picture.toJson(),
            "duration": this.duration
        }
    }
    fromJson(json: any): void {
        try {
            this.title = json.title;
            this.picture = new Picture;
            this.picture.fromJson(json.picture);
            this.duration = json.duration;
        }
        catch (err) {
            throw err;
        }
    }
}

class Picture implements DataSerialize {
    private url: string;
    private width: Number;
    private weight: Number;

    constructor(json?: any) {
        this.url = json.url || null;
        this.width = json.width || 0;
        this.weight = json.weight || 0;
    }

    toJson() {
        return {
            "url": this.url,
            "width": this.width,
            "weight": this.weight
        }
    }
    fromJson(json: any): void {
        try {
            this.url = json.url;
            this.width = json.width;
            this.weight = json.weight;
        }
        catch (err) {
            throw err;
        }
    }
}