import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {
	const [form, setForm] = useState({ 
		name: "",
		position: "",
		level: "",
	});
	const navigate = useNavigate();

	function updateForm(value) {
		return setForm((prev) => {
			return {...prev, ...value};
		});
	}

	async function onSubmit(e) {
		e.preventDefault();

		const newPerson = {...form};

		await fetch("http://localhost:5000/record/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPerson),
		})
		.catch(error => {
			window.alert(error);
			return;
		});

		setForm({ name: "", position: "", level: "" });
		navigate("/");
	}

	return (
		<div className="container justify-content-center mt-5 mb-5">
			<div className="card">
				<div className="card-header">
					<h3>Crear registro</h3>
				</div>
				<div className="card-body">
					<form onSubmit={onSubmit}>
						<div className="form-group mb-3">
							<label htmlFor="name">Nombre: </label>
							<input 
								type="text" 
								className="form-control"
								id="name"
								value={form.name}
								onChange={(e) => updateForm({name: e.target.value })}
							/>
						</div>
						<div className="form-group mb-3">
							<label htmlFor="position">Posición:</label>
							<input 
								type="text"
								className="form-control"
								id="position"
								value={form.position}
								onChange={(e) => updateForm({ position: e.target.value })}
							/>
						</div>

						<div className="form-group mb-3">
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
						<div className="form-group">
							<div className="d-grid gap-2">
								<button type="submit" className="btn btn-success rounded-pill">Crear</button>
							</div>
						</div>
					</form>
				</div>		
			</div>		
		</div>
	);
}