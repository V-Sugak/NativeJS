const ages = [15, 70, 35, 100, 90, 41, 19];

const predicate = (age: number) => {
    return age > 90
};
const oldAges = [100]; // > 90



type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    {title: 'CSS', price: 120},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

//cheaper 160
const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: 'CSS', price: 120},
    {title: 'REACT', price: 150},
];