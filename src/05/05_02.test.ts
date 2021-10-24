import {CityType} from "../02/02_02";
import {creatMessages, getStreetTitleOfBuildings, getStreetTitleOfHouses} from "./05_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            },

        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                stuffCount: 200,
                address: {street: {title: 'Central Str.'}}
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                stuffCount: 1000,
                address: {street: {title: 'North Str.'}}
            },
        ],
        citizensNumber: 1000000,
    }
})

test.skip('list of street titles of governments buildings', () => {
    let street = getStreetTitleOfBuildings(city.governmentBuildings)
    expect(street.length).toBe(2);
    expect(street[0]).toBe('Central Str.');
    expect(street[1]).toBe('North Str.');
})

test.skip('list of street titles of houses', () => {
    let street = getStreetTitleOfHouses(city.houses)
    expect(street.length).toBe(3);
    expect(street[0]).toBe('White street');
    expect(street[1]).toBe('Happy street');
    expect(street[2]).toBe('Happy street');
})

test.skip('creat greeting messages for streets', () => {
    let messages = creatMessages(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})