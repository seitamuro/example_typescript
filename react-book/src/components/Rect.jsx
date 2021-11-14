const Rect = (props) => {
    const style = {
        backgroundColor: props.c,
        position: "absolute",
        left: props.x + "px",
        top: props.y + "px",
        width: props.w + "px",
        height: props.h  +"px",
        borderRadius: props.r + "px"
    }

    return (
        <div style={style}></div>
    )
}

export default Rect;