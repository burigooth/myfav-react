import './Dropdown.css';

const Dropdown = (props) => {

    const whenTyped = (e) => {
        props.whenChanging(e.target.value);
    }

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select value={props.value} onChange={whenTyped}>
            <option value=''></option>
                {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>   
        </div>
    )
}

export default Dropdown;
