import NavComponent from "./Components/NavComponent";
import {useState} from "react";
import UsersList from "./Components/UsersList";

function App() {
    const clientDataList = [{
        name: 'aer.test',
        api: 'da',
        serifikat: "da",
        posiljke: '14',
        sanducici: '(59006) АГЕНЦИЈА ЗА ЕНЕРГЕТИКУ РЕПУБЛИКЕ СРБИЈЕ',
        id: '1'
    }, {
        name: 'aer.test1',
        api: 'da',
        serifikat: "ne",
        posiljke: 14,
        sanducici: '(59006) АГЕНЦИЈА ЗА ЕНЕРГЕТИКУ РЕПУБЛИКЕ СРБИЈЕ',
        id: '2'
    }, {
        name: 'aer.test2',
        api: 'da',
        serifikat: "da",
        posiljke: 14,
        sanducici: '(59006) АГЕНЦИЈА ЗА ЕНЕРГЕТИКУ РЕПУБЛИКЕ СРБИЈЕ',
        id: '3'
    }]
    const [clientList, setClientList] = useState(clientDataList);
    return (
        <div className="App">
            <div className={'fluid-container align-items-start'}>
                <NavComponent/>
                <div className={'tab-content'}>
                    <UsersList setClientList={setClientList} clientList={clientList}/>
                </div>
            </div>
        </div>
    );
}

export default App;
