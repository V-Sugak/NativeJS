import {ManType} from "./ManComponent";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Vika',
        age: 26,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Mir street'
            }
        }
    }
})

test('1', () => {

    /*   let age = props.age;
       let lessons = props.lessons;
   */

    //Деструктуризация данных
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(26);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Mir street')
})

test('2', () => {
    /*const [l1, l2] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');*/


    const [, , l3] = props.lessons;
    const [ls1, ...restLessons] = props.lessons

    expect(l3.title).toBe('3');
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('2');
    expect(restLessons[0]).toStrictEqual({title: '2'});
})