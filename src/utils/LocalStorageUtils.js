export const pushItems = (arrayKey, ...items) => localStorage.setItem(arrayKey, JSON.stringify([...getArray(arrayKey), ...items]))

export const getArray = key => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
