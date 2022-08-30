import { useState } from 'react'


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
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="description-input" className="form-label">
						Description (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="streaming-input" className="form-label">
						Streaming Service
					</label>
					<input 
						type="number"
						className="form-control"
						id="streaming-input"
						name="streaming"
					/>
				</div>
				<div>
					<button type="submit" id ="checkbtn"> 
						<input 
							id="checkbox" 
							onclick="return false" 
							type="checkbox" 
							<%=  movie.watched? 'checked' : '' %> 
						> 
						Watched
					</button>
				</div>

				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Puppy
					</button>
				</div>
			</form>
    </>
  )
}

export default AddMovie