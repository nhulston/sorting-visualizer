import React, {Component} from 'react';
import Header from "./Header";
import regenerate from "../util/regenerate";
import styles from "../styles/Home.module.css";
import RectangleWrapper from "./RectangleWrapper";

export default class Sort extends Component {
    render() {
        return (
            <>
                <Header
                    onChangeArrSize={this.props.setNumberRectangles}
                    onChangeSortingSpeed={(value) => {
                        this.props.setDelay(1510 - value)
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