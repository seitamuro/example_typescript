import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
    return (
        <div>
            <Article
                title={"新・日本一わかりやすいReact入門"}
                content={"今日のトピックはpropsについて"}
            />

            <TextInput />

            <Counter />

            <Toggle />
        </div>
    );
}

export default App;