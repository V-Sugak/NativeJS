export function sum(a: number, b: number) {
    return a + b;
}


export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence:string) {
    const arr = sentence.toLowerCase().split(' ');

    return arr.map(i => i.replace('!', '').replace('.', ''));
}