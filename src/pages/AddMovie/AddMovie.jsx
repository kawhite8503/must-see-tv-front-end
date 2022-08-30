import { useState } from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'



const AddMovie = (props) => {


  return (
    <>
      <h1>Add Movie</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Movie Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						value={props.formData.name}
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
						value={props.formData.description}
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
						value={props.formData.streaming}
					/>
				</div>
				<div>
					<button type="submit" id="checkbtn" htmlFor="checkbox"> 
						<Checkbox checked={props.checked} formData={props.formData} handleChange={props.handleChange}/>
						Watched
					</button>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add to Watch List
					</button>
				</div>
			</form>
    </>
  )
}

export default AddMovie