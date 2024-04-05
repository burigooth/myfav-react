import './Input.css';

const Input = (props) => {
    const whenTyped = (e) => {
        props.whenChanging(e.target.value);
    }

    return (
        <div className='input'>
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;