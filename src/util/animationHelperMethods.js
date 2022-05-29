import Rectangle from "../components/Rectangle";

export function setLeftAnimation(rectangle, moveAmount, delay) {
    return <Rectangle
        height={rectangle.props.height}
        quantity={rectangle.props.quantity}
        key={rectangle.props.id}
        id={rectangle.props.id}
        color={rectangle.props.color}
        left={true}
        moveAmount={moveAmount}
        delay={delay}
    />
}

export function setRightAnimation(rectangle, moveAmount, delay) {
    return <Rectangle
        height={rectangle.props.height}
        quantity={rectangle.props.quantity}
        key={rectangle.props.id}
        id={rectangle.props.id}
        color={rectangle.props.color}
        right={true}
        moveAmount={moveAmount}
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