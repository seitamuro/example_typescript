const style = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
}

const Message = (props) => {
    const arr = props.children.split("｡");
    let contents = [];
    for(let i = 0;i < arr.length;i++) {
        if (arr[i].trim() !== "") {
            contents.push(arr[i]);
        }
    }
    return(
        <div>
            <h2>{props.title}</h2>
            <ol className="list-group">
                {contents.map(
                    (value, key) => (
                        <li className="list-group-item" style={style} key={key}>{key+1}. {value}.</li>
                    )
                )}
            </ol>
        </div>
    )
}

export default Message