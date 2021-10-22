import './App.css';
import Rect from "./components/Rect"
import Counter from "./components/Counter"
import Message from "./components/Message"
import SimpleForm from './components/SimpleForm';

function App() {
  const data = [
    {text: "First Item"},
    {text: "Second Item"},
    {text: "Third Item"},
    {text: "Forth Item"},
    {text: "Fifth Item"}
  ]
  return (
    <div className="App">
        <h1 className="bg-primary text-white display-4">React Simple Page</h1>
        <div className="container mt-3"></div>
        <ul className="list-group">
          {data.map((value, key) => (
            <li className="list-group-item" key={key}>{value.text}</li>
          ))}
        </ul>
        <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25"/>
        <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
        <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />

        <Counter />
        <Message>これはテスト用のテキストです｡句読点がでてくるたびに新しいアイテムとして分割されます｡この文章はMessageコンポーネントの中に書かれており､これはprops.childを通じてMessageコンポーネントに渡されています｡</Message>

        <SimpleForm title="Simple Form Example" />
    </div>
  );
}

export default App;
