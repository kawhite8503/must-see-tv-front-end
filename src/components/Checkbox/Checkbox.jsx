

const Checkbox = ({checked}) => {


  return (
    <input 
			type="checkbox" 
			checked={checked}
			id="checkbox"
      name="checked"
		/>
  )

}

export default Checkbox