export const byParam = param => {
    return (a, b) => a[param] > b[param] ? 1 : -1;
}