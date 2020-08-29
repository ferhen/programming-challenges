import nameBook from './name-book';

function processInput(input: string) {
    if (typeof input !== 'string') {
        return console.error('Input must be a valid');    
    }

    const names = input.split(/[\r\n]+/);
    if (!Array.isArray(names) || names.some(x => typeof x !== 'string')) {
        return console.error('Value must be a valid list of strings');
    }

    console.time('executionTime');
    console.log(nameBook(names));
    console.timeEnd('executionTime');
}

const input = process.argv[2];
processInput(input);