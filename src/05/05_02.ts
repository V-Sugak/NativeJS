import {GovernmentBildingsType, HousesType} from "../02/02_02";

export function getStreetTitleOfBuildings(building: Array<GovernmentBildingsType>) {
    return building.map(b => b.address.street.title);
}

export function getStreetTitleOfHouses(houses: Array<HousesType>) {
    return houses.map(h => h.address.street.title);
}

export function creatMessages(houses: Array<HousesType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}