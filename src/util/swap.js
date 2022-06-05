// Swaps if i > j, returns true if a swap occurred
import {isSorted, sleep} from "./helperMethods";
import {setColor, setLeftAnimation, setRightAnimation} from "./animationHelperMethods";

export default async function swap(i, j, arr, setArr, delayRef, lastIndex, setLastIndex, shouldSwap, isBubble) {
    console.log('swapping ' + i + ' and ' + j)
    let dif = j - i

    // Set orange
    arr[i] = setColor(arr[i], '#F38300')
    arr[j] = setColor(arr[j], '#F38300')
    setArr([...arr])
    await sleep(delayRef.current)

    // Swap
    if (shouldSwap) {
        // Animate swap
        arr[i] = setRightAnimation(setColor(arr[i], '#F38300'), dif, delayRef.current)
        arr[j] = setLeftAnimation(setColor(arr[j], '#F38300'), dif, delayRef.current)
        setArr([...arr])
        await sleep(1.5 * delayRef.current)

        // Swap & set green
        let temp = arr[i]
        arr[i] = setColor(arr[j], '#00ee3f')
        arr[j] = setColor(temp, '#00ee3f')
    } else {
        // Set green
        arr[i] = setColor(arr[i], '#00ee3f')
        arr[j] = setColor(arr[j], '#00ee3f')
    }
    setArr([...arr])
    await sleep(delayRef.current)

    // Return to blue, unless last index (if isBubble)
    arr[i] = setColor(arr[i], '#0070f3')
    if (isBubble && j === lastIndex) {
        arr[j] = setColor(arr[j], '#00ee3f')
        setLastIndex(lastIndex - 1);
    } else {
        arr[j] = setColor(arr[j], '#0070f3')
    }
    setArr([...arr])
    await sleep(delayRef.current)
}