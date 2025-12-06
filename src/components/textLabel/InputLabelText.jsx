import './InputLabelTextl.css'

function InputLabelText ({ labelHTML, startTextLabel, typeOfLabel, idOfLabel, nameOfLabel, sizeOfLabel, valueOfLabel,onChangeOfLabel}) {
    return (

        <label className="label-style"
            htmlFor={labelHTML}>
            {startTextLabel} <input
            type={typeOfLabel}
            id={idOfLabel}
            name={nameOfLabel}
            size={sizeOfLabel}
            value={valueOfLabel}
            onChange={onChangeOfLabel} />
        </label>
    )
}

export default InputLabelText;