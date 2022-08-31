

const Checkbox = ({formData, checked}) => {


  return (
    <input 
			type="checkbox" 
			checked={checked}
			id="checkbox"
      name="checked"
			value={formData.watched? true : false }
      // onChange={handleChange}
		/>
  )

}

export default Checkbox