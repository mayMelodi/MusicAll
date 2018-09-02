import { DataSerialize } from './data-serialize'

export class Song implements DataSerialize {
    public _title: string;
    public _duration: string;
    public _image: string;
    public _image_height: Number;
    public _image_width: Number;

    constructor() {
     }

     toJson() {
         return {
            "title": this._title,
            "duration": this._duration,
            "image": this._image,
            "height": this._image_height,
            "width": this._image_width
         }
     }
     fromJson(resource: any) {
        this._title = resource.title;
        this._duration = resource.duration;
        this._image = resource.image.url;
        this._image_height = resource.image.height;
        this._image_width = resource.image.width;
     }
}