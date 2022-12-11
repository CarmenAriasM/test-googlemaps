export class DataDTO {
    latitude?: number;
    longitude?: number;
    created_at?: Date;
    constructor (
        latitude: number,
        longitude: number,
        created_at: Date,
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.created_at = created_at;
    }
}