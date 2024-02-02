import { useState } from "react";
import { nanoid } from 'nanoid'


function AddUser({ clientList, setClientList,setFilteredUsers }) {

    const [isOpen, setIsOpen] = useState(false);
    const [newUser, setNewUser] = useState(['']);

    const randomid = nanoid();

    const handleChange = (event) => {
        setNewUser({ id: randomid, name: event.target.value });
    }

    const handleSubmit = () => {
        setClientList([...clientList, newUser]);
        setFilteredUsers([...clientList, newUser])
        setIsOpen(false);
    }
    return (
        <div className={'add_user_wrapper'}>
            <button onClick={() => setIsOpen(true)} className={'btn btn-primary'}>Napravi API korisnika</button>
            {
                isOpen && (
                    <div className='popup_wrapper'>
                        <div className={'popup'}>
                            <div className={'popup_title'}>
                                <h3>Dodela pristupa</h3>
                                <button onClick={() => setIsOpen(false)}>X</button>
                            </div>
                            <div className={'popup_description'}>
                                <div>
                                    <label htmlFor='popup_input_id'>Client ID:</label>
                                    <input onChange={handleChange} type='text' name='popup_input_id' />
                                </div>
                                <div>
                                    <label htmlFor='popup_input_secret'>Client secret:</label>
                                    <input readOnly={true} type='text' name='popup_input_secret' value={randomid} />
                                </div>
                                <button onClick={handleSubmit} className={'btn btn-primary'}>Sacuvaj</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AddUser