export default function Header(props) {
    return (
        <div>
            <h1 className="bg-primary px-3 text-white display-4 text-center">{props.header}</h1>
        </div>
    )
}