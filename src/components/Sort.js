import React, {Component} from 'react';
import Header from "./Header";
import regenerate from "../util/regenerate";
import styles from "../styles/Home.module.css";
import RectangleWrapper from "./RectangleWrapper";

export default class Sort extends Component {
    render() {
        /*
        0 - 1000
        25 - 500
        50 - 250
        75 - 125
        100 - 0
         */
        return (
            <>
                <Header
                    onChangeArrSize={this.props.setNumberRectangles}
                    onChangeSortingSpeed={(value) => {
                        let d = 0.075 * Math.pow(value - 100, 2)
                        console.log(d)
                        this.props.setDelay(d)
                    }}
                    onRegenerate={() => {
                        regenerate(this.props.active, this.props.numberRectangles, this.props.setArr, this.props.setLastIndex)
                    }}
                    sort={this.props.sortingMethod}
                />
                <main className={styles.main}>
                    <RectangleWrapper>
                        {this.props.arr}
                    </RectangleWrapper>
                </main>
            </>
        );
    }
}