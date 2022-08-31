import { useState, useRef, useEffect } from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'



const AddMovie = (props) => {
	const formElement = useRef()
	const [validForm, setValidForm] = useState(false)
	const [checked, setChecked] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		streaming: '',
		watched: checked,
	})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangeChecked = () => {
		setChecked(!checked)
    setFormData({ ...formData, watched : !checked })
	}
	
	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
		evt.preventDefault()
	}

  return (
		<>
      <h1>Add Movie</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Movie Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="description-input" className="form-label">
						Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="streaming-input" className="form-label">
						Streaming Service
					</label>
					<input 
						type="text"
						className="form-control"
						id="streaming-input"
						name="streaming"
						value={formData.streaming}
						onChange={handleChange}
					/>
				</div>
				<div>
					<button type="button" id="checkbtn" htmlFor="checkbox" onClick={() => handleChangeChecked()}> 
						<Checkbox checked={checked}/>
						Watched
					</button>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>
						Add to Watch List
					</button>
				</div>
			</form>
    </>
  )
}

export default AddMovie