import './App.css'
import {useRef, useState} from "react";

function App() {
    const [id, setId] = useState(1);
    const codeRef = useRef<HTMLPreElement>(null);

    function queryMenuItem() {
        if (codeRef.current) {
            codeRef.current.innerText = "loading..."
        }
        fetch("/api?id=" + id).then(e => e.json()).then(async (e) => {
            console.log(e);
            if (codeRef.current) {
                codeRef.current.innerText = JSON.stringify(e, null, 4)
            }
        })
    }

    return (
        <>
            <div className="card">
                <input type="text" value={id} onChange={e => setId(e.target.value?parseInt(e.target.value):0)}
                       onKeyDown={(e) => {
                           if (e.key == "Enter") {
                               queryMenuItem()
                           }
                       }}/>
                <pre style={{
                    textAlign: "left",
                }} ref={codeRef}></pre>
            </div>
        </>
    )
}

export default App
