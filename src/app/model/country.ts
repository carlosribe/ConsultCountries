export interface Country { 
    name: Name;
    capital: Array<string>;
    population: number;
    timeZones: Array<string>;
    borders: Array<string>;
    flags: Flags;
    cca3: string;
    currencies: object;
    languages: Map<string, string>;
    latlng: Array<number>;
    region: string;
}

export interface Currencies { 
   name: string;
   symbol: string;
}

export interface Name { 
    common: string;
}

export interface Flags { 
    png: string;
    svg: string;
}

