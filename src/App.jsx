import './App.css'
import {useState} from "react";

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <form>
                <fieldset>
                    <h2>
                        🍓Aardbeien <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={strawberryCount === 0}
                        onClick={() => setStrawberryCount(strawberryCount - 1)}>-</button> {strawberryCount} <button
                            type="button"
                            name="plus"
                            id="increase-btn"
                            onClick={() => setStrawberryCount(strawberryCount + 1)}>+
                        </button>
                    </h2>
                </fieldset>
                <fieldset>
                    <h2>🍌Bananen <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={bananaCount === 0}
                        onClick={() => setBananaCount(bananaCount - 1)}>-</button> {bananaCount} <button
                            type="button"
                            name="plus"
                            id="increase-btn"
                            onClick={() => setBananaCount(bananaCount + 1)}>+
                        </button>
                    </h2>
                </fieldset>
                <fieldset>
                    <h2>🍎Appels <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={appleCount === 0}
                        onClick={() => setAppleCount(appleCount -1)}>-</button> {appleCount} <button
                        type="button"
                        name="plus"
                        id="increase-btn"
                        onClick={() => setAppleCount(appleCount + 1)}>+</button>
                    </h2>
                </fieldset>
                <fieldset>
                    <h2>🥝Kiwi's <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={kiwiCount === 0}
                        onClick={() => setKiwiCount(kiwiCount -1)}>-</button> {kiwiCount} <button
                        type="button"
                        name="plus"
                        id="increase-btn"
                        onClick={() => setKiwiCount(kiwiCount + 1)}>+</button>
                    </h2>
                </fieldset>
                <button
                    type="reset"
                    value="reset"
                    name="reset"
                    onClick={() => ([setStrawberryCount(0), setBananaCount(0),
                        setAppleCount(0), setKiwiCount(0)])}>Reset</button>



            </form>
        </>
    )
}

export default App
