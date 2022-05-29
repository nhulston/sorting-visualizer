import Rectangle from "../components/Rectangle";
import {randomNumber} from "./helperMethods";

export default function regenerate(active, numberRectangles, setArr, setLastIndex) {
    if (active) return
    let tempArr = []
    for (let i = 0; i < numberRectangles; i++) {
        tempArr.push(<Rectangle
            height={randomNumber()}
            quantity={numberRectangles}
            key={i}
            id={i}
        />)
    }
    setArr(tempArr)
    setLastIndex(tempArr.length - 1)
}