import './App.css'
import {useState} from "react";
import Button from "./components/button/Button.jsx";
import InputLabelText from "./components/textLabel/InputLabelText.jsx";
import screenshot from "./assets/screenshot-logo.png";
import FruitFieldset from "./components/fruitFieldset/FruitFieldset.jsx";

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
            <img src={screenshot} alt="logo" className="img"/>
            <form onSubmit={handleSubmit}>
                <div className="fruit-information">
                    <FruitFieldset
                        fruitName="🍓 Aardbeien"
                        count={strawberryCount}
                        disabledDecrease={strawberryCount === 0}
                        onDecrease={() => setStrawberryCount(strawberryCount -1)}
                        onIncrease={() => setStrawberryCount(strawberryCount +1)}
                    />
                    <FruitFieldset
                        fruitName="🍌 Bananen"
                        count={bananaCount}
                        disabledDecrease={bananaCount === 0}
                        onDecrease={() => setBananaCount(bananaCount -1)}
                        onIncrease={() => setBananaCount(bananaCount +1)}
                    />
                    <FruitFieldset
                        fruitName="🍎 Appels"
                        count={appleCount}
                        disabledDecrease={appleCount === 0}
                        onDecrease={() => setAppleCount(appleCount -1)}
                        onIncrease={() => setAppleCount(appleCount +1)}
                    />
                    <FruitFieldset
                        fruitName="🥝 Kiwi&apos;s"
                        count={kiwiCount}
                        disabledDecrease={kiwiCount === 0}
                        onDecrease={() => setKiwiCount(kiwiCount -1)}
                        onIncrease={() => setKiwiCount(kiwiCount +1)}
                    />

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
