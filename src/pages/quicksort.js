import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect, useRef, useState} from "react";
import swap from "../util/swap";
import regenerate from "../util/regenerate";
import {isSorted} from "../util/helperMethods";
import {setAllGreen} from "../util/animationHelperMethods";
import Sort from "../components/Sort";

export default function Home() {
    // Variables
    const [numberRectangles, setNumberRectangles] = useState(12)
    const [delay, setDelay] = useState(500)
    const [arr, setArr] = useState([])
    const [active, setActive] = useState(false)
    const delayRef = useRef()
    delayRef.current = delay
    let lastIndex = arr.length - 1
    let setLastIndex = (index) => {
        lastIndex = index
    }


    // Regenerating rectangles
    useEffect(() => {
        regenerate(active, numberRectangles, setArr, setLastIndex)
    }, [numberRectangles])


    let partition = async (low, high) => {
        let pivot = arr[high].props.height
        let i = low - 1

        for (let j = low; j <= high - 1; j++) {
            let shouldSwap = arr[j].props.height < pivot
            if (shouldSwap) {
                i++;
            }
            if (i !== j && i >= 0 && j >= 0) {
                await swap(i, j, arr, setArr, delayRef, lastIndex, setLastIndex, shouldSwap, false)
            }
        }
        if (i + 1 !== high) {
            await swap(i + 1, high, arr, setArr, delayRef, lastIndex, setLastIndex, true, false);
        }
        return i + 1;
    }

    let quicksortHelper = async (low, high) => {
        if (low < high) {
            let partitionIndex = await partition(low, high);
            await quicksortHelper(low, partitionIndex - 1);
            await quicksortHelper(partitionIndex + 1, high);
        }
    }

    let quicksort = async () => {
        if (isSorted(arr)) {
            setAllGreen(arr, setArr)
            return
        }

        setActive(true)
        await quicksortHelper(0, arr.length - 1)
        setAllGreen(arr, setArr)
        setActive(false)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Quick Sort Visualizer</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Sort
                setNumberRectangles={setNumberRectangles}
                setDelay={setDelay}
                active={active}
                numberRectangles={numberRectangles}
                arr={arr}
                setArr={setArr}
                setLastIndex={setLastIndex}
                sortingMethod={quicksort}
            />
        </div>
    )
}
