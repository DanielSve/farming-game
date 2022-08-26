export interface Player {
    name: string,
    year: number,
    balance: number,
    farmsize: string
}

export interface Crop {
    id: number,
    name: string,
    cost: number,
    color: string
}

export interface Result {
    nr: number,
    yield: number
}

