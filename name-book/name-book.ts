export default function nameBook(names: string[]): boolean {
    if (names.length < 2) {
        throw 'At least two names are required';
    }

    const sortedNames = names.sort((a, b) => b.length - a.length);

    for (const [index, name] of sortedNames.entries()) {
        for (let pointerIndex = index + 1; pointerIndex < sortedNames.length; pointerIndex++) {
            if (name.includes(names[pointerIndex])) {
                return false;
            }
        }
    }
    
    return true;
}
