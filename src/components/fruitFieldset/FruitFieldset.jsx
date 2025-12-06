import "./FruitFieldset.css"
import CounterButton from "../counterButton/CounterButton.jsx";

function FruitFieldset({fruitName, onDecrease, disabledDecrease, count,onIncrease}) {
    return (
        <fieldset className="fruit-individual">
            <h2>{fruitName} <CounterButton
                typeOfButton="button"
                nameOfButton="minus"
                idOfButton="decrease-btn"
                disabled={disabledDecrease}
                onClickOfButton={onDecrease}
                textOnButton="-"
            /> {count} <CounterButton
                typeOfButton="button"
                nameOfButton="plus"
                idOfButton="increase-btn"
                onClickOfButton={onIncrease}
                textOnButton="+"
            />

            </h2>
        </fieldset>
    )
}
export default FruitFieldset;