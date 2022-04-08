import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit(){
    const [form, setForm] = useState({ 
        name: "",
        position: "",
        level: "",
        records: [],
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

            if(!response.ok) {
                const message = `Un error ha ocurrido: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if(!record) {
                window.alert(`Registro con ${id} no encontrado`);
                navigate("/");
                return;
            }
            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
            name: form.name,
            position: form.position,
            level: form.level,
        };

        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/");
    }

return (
    
    <div className="container mt-5 mb-5">
        <div className="card">
            <div className="card-header">
                <h3>Actualizar registro</h3>
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                        <label htmlFor="name">Nombre: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="name"
                            value={form.name}
                            onChange={(e) => updateForm({name: e.target.value })}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label htmlFor="position">Posición:</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="position"
                            value={form.position}
                            onChange={(e) => updateForm({ position: e.target.value })}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <div className="form-check form-check-inline">
                            <input 
                                type="radio"
                                className="form-check-input"
                                name="positionOptions"
                                id="positionIntern"
                                value="Interno"
                                checked={form.level === "Interno"}
                                onChange={(e) => updateForm({ level: e.target.value })}
                            />
                            <label htmlFor="positionIntern" className="form-check-label">Interno</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                type="radio"
                                className="form-check-input"
                                name="positionOptions"
                                id="positionJunior"
                                value="Junior"
                                checked={form.level === "Junior"}
                                onChange={(e) => updateForm({ level: e.target.value })}
                            />
                            <label htmlFor="positionJunior" className="form-check-label">Junior</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                type="radio"
                                className="form-check-input"
                                name="positionOptions"
                                id="positionSenior"
                                value="Senior"
                                checked={form.level === "Senior"}
                                onChange={(e) => updateForm({ level: e.target.value })}
                            />
                            <label htmlFor="positionSenior" className="form-check-label">Senior</label>
                        </div>
                    </div>
                    <br />

                    <div className="form-group">
                        <div class="d-grid gap-2">
                            <button type="submit"  className="btn btn-success rounded-pill"> Actualizar </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

}