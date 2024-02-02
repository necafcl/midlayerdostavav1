import LinkPopup from "./LinkPopup";

function UsersListItem({ clientName, clientApi, clientSertifikat, clientPosiljke, clientSanducici }) {
    return (
        <tr>
            <td>{clientName}</td>
            <td>{clientApi}</td>
            <td>{clientSertifikat}</td>
            <td>{clientPosiljke}</td>
            <td>
                <LinkPopup clientSanducici={clientSanducici} clientName={clientName} />
            </td>
        </tr>
    )
}

export default UsersListItem