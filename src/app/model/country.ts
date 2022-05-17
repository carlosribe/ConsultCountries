export class Country { 
    name!: Name;
    capital!: Array<string>;
    population!: number;
    timeZones!: Array<string>;
    borders!: Array<string>;
    flags!: Flags;
    cca2!: string;
    currencies!: Map<string, string>;
    languages!: Map<string, string>;
}

export class Currencies { 
   name!: string;
   symbol!: string;
}

export class Name { 
    common!: string;
}

export class Flags { 
    png!: string;
    svg!: string;
}

