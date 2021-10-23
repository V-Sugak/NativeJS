import {CityType} from "../02/02_02";
import {buildingsWithCorrectStuffCount, demolishHouses} from "./04_02";

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

test.skip('Houses should be destroyed', () => {
    const newHouses = demolishHouses(city, 'Happy street')

    expect(newHouses.length).toBe(1);
    expect(newHouses[0].id).toBe(1)
})

test.skip('buildings with correct stuff cont more than 500', () => {
    const buildings = buildingsWithCorrectStuffCount(city, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})