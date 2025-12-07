import './CounterButton.css'

function CounterButton({ typeOfButton, valueOfButton, nameOfButton, idOfButton, onClickOfButton, textOnButton, disabled }) {

    return (
        <button className="styled-counter-button"
            type={typeOfButton}
            value={valueOfButton}
            name={nameOfButton}
            id={idOfButton}
            disabled={disabled}
            onClick={onClickOfButton}
        >
            {textOnButton}
        </button>
    )
}

export default CounterButton;