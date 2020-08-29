export default function factorialHash(value: bigint): bigint {
    if (value === 0n || value === 1n) {
        return 1n;
    }
    return value * factorialHash(value - 1n);
}

// slower for large numbers
export function factorialHashIterative(value: bigint): bigint {
    if (value === 0n || value === 1n) {
        return 1n;
    }
    let result = 1n;

    for (let index = 1n; index <= value; index++) {
        result *= index;
    } 
    return result;
}
