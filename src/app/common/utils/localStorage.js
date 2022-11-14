export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, value) => {
    if (typeof key !== 'string' || !key) {
        throw new Error('unsafe usage of set, key must be a not null string');
    }
    localStorage.setItem(key, JSON.stringify(value));
};
 