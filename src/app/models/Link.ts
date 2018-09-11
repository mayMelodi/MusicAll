import { DataSerialize } from "./data-serialize";

export class Link implements DataSerialize {
    private link: string;
  
    constructor(url?: string) { if (url) this.link = url; }
    toJson() { return { "url": this.link }; }
    fromJson(json: any): void { this.link = json.url; }
  }