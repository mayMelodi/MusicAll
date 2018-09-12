import { DataSerialize } from "./data-serialize";

export class Discover implements DataSerialize {

    bands:Number;
    boys: Number;
    girls: Number;
    dj: Number;
    musicEra: Number;
    songs: Number;

    constructor(x1, x2 ,x3 ,x4 ,x5, x6) {
        this.bands = x1;
        this.boys = x2;
        this.girls = x3;
        this.dj = x4;
        this.musicEra = x5;
        this.songs = x6;
    }

    toJson() {
        return { "input": [this.bands, this.boys, this.girls, this.dj, this.musicEra, this.songs] };
    }
    fromJson(json: any): void {
    }
}