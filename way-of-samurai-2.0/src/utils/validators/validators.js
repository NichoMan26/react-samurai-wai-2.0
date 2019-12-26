export const required = (value) => {
    if (value) return undefined
    return 'Field is requiret'
    
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length value is ${maxLength}`
    return undefined
    
}
