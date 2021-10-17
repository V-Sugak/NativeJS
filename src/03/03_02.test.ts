import {CityType} from "../02/02_02";
import {addMoneyToBudget, creatMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            },

        ],
        governmentBildings: [
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

test.skip('Budget should be changed for HOSPITAL', () => {
    expect(city.governmentBildings[0].budget).toBe(200000)
    addMoneyToBudget(city.governmentBildings[0], 100000);
    expect(city.governmentBildings[0].budget).toBe(300000)
})

test.skip('Budget should be changed for FIRE-STATION', () => {
    expect(city.governmentBildings[1].budget).toBe(500000)
    addMoneyToBudget(city.governmentBildings[1], -100000);
    expect(city.governmentBildings[1].budget).toBe(400000)
})

test.skip('House should be repaired', () => {
    repairHouse(city.houses[0], true);
    expect(city.houses[0].repaired).toBe(true);
})

test.skip('Staff should be decreased', () => {
    toFireStaff(city.governmentBildings[0], 20);
    expect(city.governmentBildings[0].stuffCount).toBe(180);
})

test.skip('Staff should be increased', () => {
    toHireStaff(city.governmentBildings[0], 20);
    expect(city.governmentBildings[0].stuffCount).toBe(220);
})

test.skip('Greeting message should be correct for city', () => {
    expect(creatMessage(city.title)).toBe('Hello New York citizen')
})