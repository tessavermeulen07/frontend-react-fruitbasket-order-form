import './App.css'
import {useState} from "react";
import Button from "./components/button/Button.jsx";
import CounterButton from "./components/counterButton/CounterButton.jsx";
import InputLabelText from "./components/textLabel/InputLabelText.jsx"

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [zipCodeValue, setZipCodeValue] = useState('');
    const [deliveryValue, setDeliveryValue] = useState('Selecteer een moment');
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
                <div className="fruit-information">
                    <fieldset className="fruit-individual">
                        <h2>
                            🍓Aardbeien <CounterButton
                                typeOfButton="button"
                                nameOfButton="minus"
                                idOfButton="decrease-btn"
                                disabled={strawberryCount === 0}
                                onClickOfButton={() => setStrawberryCount(strawberryCount - 1)}
                                textOnButton="-"
                            /> {strawberryCount} <CounterButton
                            typeOfButton="button"
                            nameOfButton="plus"
                            idOfButton="increase-btn"
                            onClickOfButton={() => setStrawberryCount(strawberryCount + 1)}
                            textOnButton="+"
                            />
                        </h2>
                    </fieldset>
                    <fieldset className="fruit-individual">
                        <h2>🍌Bananen <CounterButton
                            typeOfButton="button"
                            nameOfButton="minus"
                            idOfButton="decrease-btn"
                            disabled={bananaCount === 0}
                            onClickOfButton={() => setBananaCount(bananaCount - 1)}
                            textOnButton="-"
                        /> {bananaCount} <CounterButton
                            typeOfButton="button"
                            nameOfButton="plus"
                            idOfButton="increase-btn"
                            onClickOfButton={() => setBananaCount(bananaCount + 1)}
                            textOnButton="+"
                        />
                        </h2>
                    </fieldset>
                    <fieldset className="fruit-individual">
                        <h2>🍎Appels <CounterButton
                            typeOfButton="button"
                            nameOfButton="minus"
                            idOfButton="decrease-btn"
                            disabled={appleCount === 0}
                            onClickOfButton={() => setAppleCount(appleCount - 1)}
                            textOnButton="-"
                        /> {appleCount} <CounterButton
                            typeOfButton="button"
                            nameOfButton="plus"
                            idOfButton="increase-btn"
                            onClickOfButton={() => setAppleCount(appleCount + 1)}
                            textOnButton="+"
                        />
                        </h2>
                    </fieldset>
                    <fieldset className="fruit-individual">
                        <h2>🥝Kiwi&apos;s <CounterButton
                            typeOfButton="button"
                            nameOfButton="minus"
                            idOfButton="decrease-btn"
                            disabled={kiwiCount === 0}
                            onClickOfButton={() => setKiwiCount(kiwiCount - 1)}
                            textOnButton="-"
                        /> {kiwiCount} <CounterButton
                            typeOfButton="button"
                            nameOfButton="plus"
                            idOfButton="increase-btn"
                            onClickOfButton={() => setKiwiCount(kiwiCount + 1)}
                            textOnButton="+"
                        />
                        </h2>
                    </fieldset>

                    <Button
                        typeOfButton="reset"
                        valueOfButton="reset"
                        nameOfButton="reset"
                        onClickOfButton={() => ([setStrawberryCount(0), setBananaCount(0),
                            setAppleCount(0), setKiwiCount(0)])}
                        textOnButton="Reset"
                    />

                    {/*<button*/}
                    {/*    type="reset"*/}
                    {/*    value="reset"*/}
                    {/*    name="reset"*/}
                    {/*    onClick={() => ([setStrawberryCount(0), setBananaCount(0),*/}
                    {/*        setAppleCount(0), setKiwiCount(0)])}>Reset*/}
                    {/*</button>*/}
                    {/*Hier een functie van maken zie 22 minuten*/}
                </div>
                <fieldset className="form-information">
                    <InputLabelText
                        labelHTML="first-name"
                        startTextLabel="Voornaam: "
                        typeOfLabel="text"
                        idOfLabel="first-name"
                        nameOfLabel="first-name"
                        sizeOfLabel="30"
                        valueOfLabel={firstNameValue}
                        onChangeOfLabel={(e) => setFirstNameValue(e.target.value)}
                    />
                    <InputLabelText
                        labelHTML="first-name"
                        startTextLabel="Achternaam: "
                        typeOfLabel="text"
                        idOfLabel="last-name"
                        nameOfLabel="last-name"
                        sizeOfLabel="30"
                        valueOfLabel={lastNameValue}
                        onChangeOfLabel={(e) => setLastNameValue(e.target.value)}
                    />
                    <InputLabelText
                        labelHTML="age"
                        startTextLabel="Leeftijd: "
                        typeOfLabel="number"
                        idOfLabel="age"
                        nameOfLabel="age"
                        sizeOfLabel="30"
                        valueOfLabel={ageValue}
                        onChangeOfLabel={(e) => setAgeValue(e.target.value)}
                    />
                    <InputLabelText
                        labelHTML="zipcode"
                        startTextLabel="Postcode: "
                        typeOfLabel="text"
                        idOfLabel="zipcode"
                        nameOfLabel="zipcode"
                        sizeOfLabel="30"
                        valueOfLabel={zipCodeValue}
                        onChangeOfLabel={(e) => setZipCodeValue(e.target.value)}
                    />

                    <label className="label-style">
                        <p>Bezorgfrequentie</p>
                        <select className="label-style"
                            name="delivery-frequency"
                            id="delivery-frequency"
                            value={deliveryValue}
                            onChange={(e) => setDeliveryValue(e.target.value)}
                        >
                            <option value="iedere-week">Iedere week</option>
                            <option value="om-de-week">Om de week</option>
                            <option value="iedere-maand">Iedere maand</option>
                        </select>
                    </label>
                    <label className="label-style">
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
                    <label className="label-style">
                        <p>Opmerking:</p>
                        <textarea
                            id="remarks"
                            name="remarks"
                            rows="5"
                            cols="50"
                            value={remarkValue}
                            onChange={(e) => setRemarkValue(e.target.value)}
                        ></textarea>
                    </label>
                    <label className="label-style">
                        <input
                            type="checkbox"
                            id="conditions"
                            name="conditions-agreed"
                            checked={agreeConditionsValue}
                            onChange={() => toggleAgreeConditionsValue(!agreeConditionsValue)}
                        /> Ik ga akkoord met de voorwaarden
                    </label>

                    <Button
                        typeOfButton="submit"
                        nameOfButton="verzend"
                        valueOfButton="send"
                        textOnButton="Verzend"
                    />

                </fieldset>
            </form>
        </>
    )
}

export default App
