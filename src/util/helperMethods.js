export function randomNumber() {
    return Math.floor(Math.random() * 175) + 50;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].props.height > arr[i+1].props.height) {
            return false
        }
    }
    return true
}

export const BUBBLE = 0
export const HEAP = 1
export const SELECTION = 2
// export const QUICK = 3 // Not needed