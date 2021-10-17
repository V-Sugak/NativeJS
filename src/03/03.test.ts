import {StudentType} from "../02/02";
import {addSkill, madeStudentActive, studentLiveIN} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Vika',
        age: 26,
        isActive: false,
        address: {
            streetTitle: 'Surganovo 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            },
        ]
    }
})

test.skip('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test.skip('student should be made active', () => {
    expect(student.isActive).toBe(false);
    madeStudentActive(student, true);
    expect(student.isActive).toBe(true);
})

test.skip('what city does student live', () => {
    const result = studentLiveIN(student, 'Moskow');
    const result2 = studentLiveIN(student, 'Minsk');

    expect(result).toBe(false);
    expect(result2).toBe(true);
})