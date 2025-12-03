import './App.css'
import {useState} from "react";

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [zipCodeValue, setZipCodeValue] = useState('');
    const [deliveryValue, setDeliveryValue] = useState ('Selecteer een moment');
    const [deliveryMomentValue, setDeliveryMomentValue] = useState('overdag');
    const [remarkValue, setRemarkValue] = useState('');
    const [agreeConditionsValue, toggleAgreeConditionsValue] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
        First name: ${firstNameValue}
        Last name: ${lastNameValue}
        Age: ${ageValue}
        Zipcode: ${zipCodeValue}
        Delivery: ${deliveryValue}
        Delivery moment: ${deliveryMomentValue}
        Remarks: ${remarkValue}
        Agreed Conditions: ${agreeConditionsValue}
        `);
        console.log(`
        Strawberries: ${strawberryCount}
        Bananas: ${bananaCount}
        Apples: ${appleCount}
        Kiwi's: ${kiwiCount}
        `)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>
                        🍓Aardbeien <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={strawberryCount === 0}
                        onClick={() => setStrawberryCount(strawberryCount - 1)}>-</button> {strawberryCount}
                        <button
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
                        onClick={() => setBananaCount(bananaCount - 1)}>-</button> {bananaCount}
                        <button
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
                        onClick={() => setAppleCount(appleCount - 1)}>-</button> {appleCount}
                        <button
                            type="button"
                            name="plus"
                            id="increase-btn"
                            onClick={() => setAppleCount(appleCount + 1)}>+
                        </button>
                    </h2>
                </fieldset>
                <fieldset>
                    <h2>🥝Kiwi's <button
                        type="button"
                        name="minus"
                        id="decrease-btn"
                        disabled={kiwiCount === 0}
                        onClick={() => setKiwiCount(kiwiCount - 1)}>-</button> {kiwiCount}
                        <button
                            type="button"
                            name="plus"
                            id="increase-btn"
                            onClick={() => setKiwiCount(kiwiCount + 1)}>+
                        </button>
                    </h2>
                </fieldset>
                <button
                    type="reset"
                    value="reset"
                    name="reset"
                    onClick={() => ([setStrawberryCount(0), setBananaCount(0),
                        setAppleCount(0), setKiwiCount(0)])}>Reset
                </button> {/*Hier een functie van maken zie 22 minuten*/}
                <fieldset className="form-information">
                    <label htmlFor="first-name">
                        Voornaam: <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        size="30"
                        value={firstNameValue}
                        onChange={(e) => setFirstNameValue(e.target.value)}
                    />
                    </label>
                    <label>Achternaam: <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    size="30"
                    value={lastNameValue}
                    onChange={(e) => setLastNameValue(e.target.value)}
                    />
                    </label>
                    <label>Leeftijd: <input
                    type="number"
                    id="age"
                    name="age"
                    size="30"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                    />
                    </label>
                    <label>Postcode: <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        size="30"
                        value={zipCodeValue}
                        onChange={(e) => setZipCodeValue(e.target.value)}
                    />
                    </label>
                    <label>Bezorgfrequentie
                        <select
                            name="delivery-frequency"
                            id="delivery-frequency"
                            value={deliveryValue}
                            onChange={(e) => setDeliveryValue(e.target.value)}
                        >
                            <option value="weekly">Iedere week</option>
                            <option value="every-other-week">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="delivery-moment"
                            value="overdag"
                            checked={deliveryMomentValue === "overdag"}
                            onChange={(e) => setDeliveryMomentValue(e.target.value)}
                        /> overdag <input
                            type="radio"
                            name="deliverymoment"
                            value="'s avonds"
                            checked={deliveryMomentValue === "'s avonds"}
                            onChange={(e) => setDeliveryMomentValue(e.target.value)}
                        /> &apos;s avonds
                    </label>
                    <label>
                        <p>Opmerking:</p>
                        <textarea
                            id="remarks"
                            name="remarks"
                            rows="5"
                            cols="30"
                            value={remarkValue}
                            onChange={(e) => setRemarkValue(e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="conditions"
                            name="conditions-agreed"
                            checked={agreeConditionsValue}
                            onChange={(e) => toggleAgreeConditionsValue(!agreeConditionsValue)}
                        /> Ik ga akkoord met de voorwaarden
                    </label>
                    <button
                        type="submit"
                        name="verzend"
                        value="send"
                    >
                        Verzend
                    </button>
                    {/*maar pas bij klikken worden de fruitwaardes en de formulierwaardes in de console gelogd.*/}
                </fieldset>
            </form>
        </>
    )
}

export default App
