import {StudentType} from "../02/02";
import {GovernmentBildingsType, HousesType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const madeStudentActive = (student: StudentType, active: boolean) => {
    student.isActive = active;
}

export const studentLiveIN = (student: StudentType, city: string) => {
    return city === student.address.city.title;
}

export const addMoneyToBudget = (building: GovernmentBildingsType, money: number) => {
    building.budget += money;
}

export const repairHouse = (house: HousesType, repaired: boolean) => {
    house.repaired = repaired;
}

export const toFireStaff = (building: GovernmentBildingsType, staff: number) => {
    building.stuffCount -= staff;
}

export const toHireStaff = (building: GovernmentBildingsType, staff: number) => {
    building.stuffCount += staff;
}

export function creatMessage(city: string) {
    return `Hello ${city} citizen`;
}