type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street: StreetType
}

export type  HousesType = {
    id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    stuffCount: number
    address: AddressType
}

export  type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBildingsType>
    citizensNumber: number
}