
export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required!';
}


export const maxLengthCreator = maxLength => value => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}
