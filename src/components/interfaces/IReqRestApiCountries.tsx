export interface IReqRestApiCountries {
    info:    IInfo;
    results: IWelcome[];
}

export interface IInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface IWelcome {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital?:       string;
    altSpellings?:  string[];
    subregion:      string;
    region:         IRegion;
    population:     number;
    latlng?:        number[];
    demonym:        string;
    area?:          number;
    timezones:      string[];
    borders?:       string[];
    nativeName:     string;
    numericCode:    string;
    flags:          IFlags;
    currencies?:    ICurrency[];
    languages:      ILanguage[];
    translations:   ITranslations;
    flag:           string;
    regionalBlocs?: IRegionalBloc[];
    cioc?:          string;
    independent:    boolean;
    gini?:          number;
}

export interface ICurrency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface IFlags {
    svg: string;
    png: string;
}

export interface ILanguage {
    iso639_1?:   string;
    iso639_2:    string;
    name:        string;
    nativeName?: string;
}

export enum IRegion {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    AntarcticOcean = "Antarctic Ocean",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

export interface IRegionalBloc {
    acronym:        IAcronym;
    name:           IName;
    otherNames?:    IOtherName[];
    otherAcronyms?: IOtherAcronym[];
}

export enum IAcronym {
    Al = "AL",
    Asean = "ASEAN",
    Au = "AU",
    Cais = "CAIS",
    Caricom = "CARICOM",
    Cefta = "CEFTA",
    Eeu = "EEU",
    Efta = "EFTA",
    Eu = "EU",
    Nafta = "NAFTA",
    Pa = "PA",
    Saarc = "SAARC",
    Usan = "USAN",
}

export enum IName {
    AfricanUnion = "African Union",
    ArabLeague = "Arab League",
    AssociationOfSoutheastAsianNations = "Association of Southeast Asian Nations",
    CaribbeanCommunity = "Caribbean Community",
    CentralAmericanIntegrationSystem = "Central American Integration System",
    CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
    EurasianEconomicUnion = "Eurasian Economic Union",
    EuropeanFreeTradeAssociation = "European Free Trade Association",
    EuropeanUnion = "European Union",
    NorthAmericanFreeTradeAgreement = "North American Free Trade Agreement",
    PacificAlliance = "Pacific Alliance",
    SouthAsianAssociationForRegionalCooperation = "South Asian Association for Regional Cooperation",
    UnionOfSouthAmericanNations = "Union of South American Nations",
}

export enum IOtherAcronym {
    Eaeu = "EAEU",
    Sica = "SICA",
    Unasul = "UNASUL",
    Unasur = "UNASUR",
    Uzan = "UZAN",
}

export enum IOtherName {
    AccordDeLibre??changeNordAm??ricain = "Accord de Libre-??change Nord-Am??ricain",
    AlianzaDelPac??fico = "Alianza del Pac??fico",
    CaribischeGemeenschap = "Caribische Gemeenschap",
    Communaut??Carib??enne = "Communaut?? Carib??enne",
    ComunidadDelCaribe = "Comunidad del Caribe",
    J??miAtAdDuwalAlArab??yah = "J??mi??at ad-Duwal al-??Arab??yah",
    LeagueOfArabStates = "League of Arab States",
    SistemaDeLaIntegraci??nCentroamericana = "Sistema de la Integraci??n Centroamericana,",
    SouthAmericanUnion = "South American Union",
    TratadoDeLibreComercioDeAm??ricaDelNorte = "Tratado de Libre Comercio de Am??rica del Norte",
    UmojaWaAfrika = "Umoja wa Afrika",
    UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
    UnionAfricaine = "Union africaine",
    Uni??oAfricana = "Uni??o Africana",
    Uni??oDeNa????esSulAmericanas = "Uni??o de Na????es Sul-Americanas",
    Uni??nAfricana = "Uni??n Africana",
    Uni??nDeNacionesSuramericanas = "Uni??n de Naciones Suramericanas",
    ?????????????????????????????? = "?????????????? ????????????????",
    ?????????????????????????????????? = "?????????? ?????????? ??????????????",
}

export interface ITranslations {
    br:  string;
    pt:  string;
    nl:  string;
    hr:  string;
    fa?: string;
    de:  string;
    es:  string;
    fr:  string;
    ja:  string;
    it:  string;
    hu:  string;
}
