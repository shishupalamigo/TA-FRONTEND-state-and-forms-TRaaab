import Form1 from "./Form1";
import Form2 from "./Form2";
import "../style.css";

function App() {
    return (
        <>
        <Form1 />
        <main className="mt-20">
            <h2 className="text-center font-bold mb-10 text-3xl">Form With Validations</h2>
        <Form2 />

        </main>
        </>
    )
}

export default App;