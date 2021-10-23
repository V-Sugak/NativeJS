test.skip('should take old men older than 90', () => {
    const ages = [15, 70, 35, 100, 90, 41, 19];

    const oldAges = ages.filter(a => a > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test.skip('the course should costs less than 160', () => {
    type CourseType = {
        title: string
        price: number
    }

    const courses: Array<CourseType> = [
        {title: 'CSS', price: 120},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},]

    const cheapCourses = courses.filter(c => c.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].price).toBe(120);
    expect(cheapCourses[1].price).toBe(150);
})

test.skip('should get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: true},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'sugar', isDone: true},
        {id: 4, title: 'salt', isDone: false},
    ]

    const completedTasks = tasks.filter(t => t.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('bread');
    expect(completedTasks[1].title).toBe('sugar');
})