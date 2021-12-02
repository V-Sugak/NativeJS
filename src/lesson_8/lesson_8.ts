// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    return nums.reduce((sum: number, number: number) => sum + number)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || b + c < a || a + c < b) {
        return '00'
    } else if (a === b && b === c) {
        return '10'
    } else if (a === b || b === c || a === c) {
        return '01'
    } else {
        return '11'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const arr = number.toString().split('').map(i => Number(i))
    return arr.reduce((a: number, b: number) => a + b, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumPos = 0;
    let sumNeg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumPos = arr[i];
        } else {
            sumNeg = arr[i];
        }
    }
    return sumPos > sumNeg
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    const arr1 = array.filter(i => i > 0 && Number.isInteger(i))
    return arr1.map(i => Math.pow(i, 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N === 0) {
        return 0
    }
    return N + sumFirstNumbers(N - 1)

}
function factorial (N: number): number {
    if (N === 1) {
        return 1
    }
    return N * factorial(N - 1)
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let num = 0;
    let arr = [];
    for (let i = 0; i < banknotes.length; i++) {
        while (num + banknotes[i] <= amountOfMoney) {
            num += banknotes[i];
            arr.push(banknotes[i])
        }
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return arr
}