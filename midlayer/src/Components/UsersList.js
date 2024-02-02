import AddUser from "./AddUser";
import UsersListTable from "./UsersListTable";
import React,{useState} from "react";


function UsersList({ clientList, setClientList }) {

    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(clientList);

    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
  
      const filteredItems = clientList.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setFilteredUsers(filteredItems);
    }

    return (
        <React.Fragment>
            <AddUser setClientList={setClientList} clientList={clientList} setFilteredUsers={setFilteredUsers}/>
            <div className={'table_title'}>
                <h2>Lista korisnika Midlayer-a</h2>
            </div>
            <UsersListTable clientList={clientList} handleInputChange={handleInputChange} filteredUsers={filteredUsers} searchItem={searchItem} />
        </React.Fragment>
    )
}

export default UsersList