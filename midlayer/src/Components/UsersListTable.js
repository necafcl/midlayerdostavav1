import UsersListItem from "./UsersListItem";
import { nanoid } from 'nanoid';
import React from "react";

function UsersListTable({ clientList, handleInputChange ,filteredUsers , searchItem}) {

    return (
        <React.Fragment>
            <div className={'table-title'}>
                <div></div>
                <div>
                    <label htmlFor='search'>Search: </label>
                    <input value={searchItem} type='text' name='search' onChange={handleInputChange}/>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Izdati API kredencijali?</th>
                        <th>Auth sertifikatom</th>
                        <th>Broj pošiljki</th>
                        <th>Sandučići</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(client => {
                        return <UsersListItem key={nanoid()} clientName={client.name}
                            clientApi={client.api} clientSertifikat={client.serifikat}
                            clientPosiljke={client.posiljke} clientSanducici={client.sanducici} />;
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default UsersListTable