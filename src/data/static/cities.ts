type T_City = {
    uri: string;
    name: string;
    declination: {
        nominative: string;
        genitive: string;
        dative: string;
    }
    image?: T_Image;
    location: {
        coordinates: {
            lat: number;
            lng: string;
        }
        province: string;
        county: string;
        municipality: string;
    }
}


type T_Citites = Array<T_City>;

const cities: T_Citites = []

export default cities;