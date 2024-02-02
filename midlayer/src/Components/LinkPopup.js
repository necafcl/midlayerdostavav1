import { useState } from "react";
import React from "react";

function LinkPopup({ clientName, clientSanducici }) {
    const [isOpen, setIsOpen] = useState(false);
    const SetOpen = (event) => {
        event.preventDefault();
        setIsOpen(true);
    }
    return (
        <React.Fragment>
            <div> {clientSanducici} </div>
            <a href="#" onClick={SetOpen} className={'add-org'}>
                Dodaj pristup sanducetu
            </a>
            {
                isOpen && (
                    <div className='popup_wrapper'>
                        <div className={'popup'}>
                            <div className={'popup_title'}>
                                <h3>Dodela Pristupa</h3>
                                <button onClick={() => setIsOpen(false)}>X</button>
                            </div>
                            <div className={'popup_description'}>
                                <p>Korisnički nalog: {clientName}</p>
                                <label htmlFor='popup_input'>JBKJS sandučeta:</label>
                                <input type='text' name='popup_input' />
                                <button className={'btn btn-primary'}>Sacuvaj</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default LinkPopup