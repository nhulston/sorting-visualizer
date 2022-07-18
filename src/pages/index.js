import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorting Algorithm Visualizer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Nick&apos;s<br/>
          <a href="https://github.com/nhulston" target="_blank" rel="noreferrer">Algorithm Visualizer</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/bubblesort">
            <a className={styles.card}>
              <h2>Bubble Sort &rarr;</h2>
              <p>The simplest sorting algorithm with very high time complexity. Repeatedly swaps adjacent elements.</p>
            </a>
          </Link>

          <Link href="/selectionsort">
            <a className={styles.card}>
              <h2>Selection Sort &rarr;</h2>
              <p>A slight improvement to bubble sort that finds the smallest, unsorted element and puts it at the beginning.</p>
            </a>
          </Link>

          <Link href="/heapsort">
            <a className={styles.card}>
              <h2>Heap Sort &rarr;</h2>
              <p>An improved selection sort that builds an array-backed max heap to quickly find the largest element.</p>
            </a>
          </Link>

          <Link href="/quicksort">
            <a className={styles.card}>
              <h2>Quick Sort &rarr;</h2>
              <p>Picks a pivot and partitions the array around the pivot point. It is generally much faster than heap sort.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
