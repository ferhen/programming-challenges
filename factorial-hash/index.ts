import factorialHash from './factorial-hash';

function processInput(input: string) {
    const value = parseInt(input);
    if (isNaN(value)) {
        throw 'Value must be a valid integer';
    }
    
    console.time('executionTime');
    console.log(factorialHash(BigInt(value)));
    console.timeEnd('executionTime');
}

const input = process.argv[2];
processInput(input);
