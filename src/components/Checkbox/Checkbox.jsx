

const Checkbox = ({formData, checked, handleChange}) => {


  return (
    <input 
			type="checkbox" 
			checked={checked}
			id="checkbox"
			value={formData.watched} 
			onChange={handleChange} 
		/>
  )

}

export default Checkbox