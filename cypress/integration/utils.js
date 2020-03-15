const getArrayOfStrings = (listOfStrings) => {

    try {
        return JSON.parse(`[${listOfStrings}]`);
    } catch (error) {
        throw new error('Plese provide a valid array of strings following the pattern ["stringOne","stringTwo"]');
    }
}