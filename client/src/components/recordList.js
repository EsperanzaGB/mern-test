import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'



const Record = (props) => (
    <tr className="align-middle">
        <td>{props.record.name}</td>
        <td>{props.record.position}</td>
        <td>{props.record.level}</td>
        <td>
            <button className="btn btn-link">
                <Link to={`/edit/${props.record._id}`}> <FontAwesomeIcon icon={faPenToSquare}  className="btn btn-warning"/></Link>
            </button>
            <button className="btn btn-link"  onClick={() => {props.deleteRecord(props.record._id);}} >
                <FontAwesomeIcon className="btn btn-danger" icon={faTrashCan} /> 
            </button>
        </td>
    </tr>
);

export default function RecordList(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/record/`);

            if(!response.ok) {
                const message = `Un error ha ocurrido: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }
function recordList() {
    return records.map((record) => {
        return (
            <Record
                record={record}
                deleteRecord={() => deleteRecord(record._id)}
                key={record._id}
            />
        );
    });
}

return (
   
    <div className="container mt-4 mb-4">
        <div className="text-end">
            <Link to="/create" className="btn btn-info rounded text-white fw-bold">
                <i className="fa-plus me-1" /> 
                    Crear
            </Link>
        </div>
        <div className="mt-2">
            <table className="table table-responsive modal-scroll table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Nivel</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {recordList()}
                </tbody>
            </table>     
        </div>  
    </div>
);

}