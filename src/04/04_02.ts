import {CityType} from "../02/02_02";

export function demolishHouses(city: CityType, street: string) {
    return city.houses.filter(h => h.address.street.title !== street)
}

export function buildingsWithCorrectStuffCount(city: CityType, count: number) {
    return city.governmentBuildings.filter(h => h.stuffCount > count)
}