export default function MyImage(props) {
    let fname = "./" + props.fname
    let size = props.size + "px"

    return (
        <div className="text-center my-5">
            <img width={size} border="1" src={fname} />
        </div>
    )
}