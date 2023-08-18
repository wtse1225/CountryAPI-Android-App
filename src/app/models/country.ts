export interface Flags {
    svg: string,
    png: string
}

export default interface Country {
    flags: Flags,
    name: string,
    alpha3Code: string,
    capital: string,
    population: number
}