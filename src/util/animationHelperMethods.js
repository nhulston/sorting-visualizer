import Rectangle from "../components/Rectangle";
import {isSorted} from "./helperMethods";

export function setLeftAnimation(rectangle, dif, delay) {
    return <Rectangle
        dif={dif}
        height={rectangle.props.height}
        quantity={rectangle.props.quantity}
        key={rectangle.props.id}
        id={rectangle.props.id}
        color={rectangle.props.color}
        left={true}
        delay={delay}
    />
}

export function setRightAnimation(rectangle, dif, delay) {
    return <Rectangle
        dif={dif}
        height={rectangle.props.height}
        quantity={rectangle.props.quantity}
        key={rectangle.props.id}
        id={rectangle.props.id}
        color={rectangle.props.color}
        right={true}
        delay={delay}
    />
}

export function setColor(rectangle, color) {
    return <Rectangle
        height={rectangle.props.height}
        quantity={rectangle.props.quantity}
        key={rectangle.props.id}
        id={rectangle.props.id}
        color={color}
        left={false}
        right={false}
    />
}

export function setAllGreen(arr, setArr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = setColor(arr[i], '#00ee3f')
        setArr([...arr])
    }
}