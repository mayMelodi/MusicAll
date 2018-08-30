export interface DataSerialize {
    toJson(): any;
    fromJson(json: any): void
}
