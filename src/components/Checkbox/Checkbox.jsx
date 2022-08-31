

const Checkbox = (props) => {


  return (
    <input 
			type="checkbox" 
			checked={props.checked}
			id="checkbox"
      name="checked"
		/>
  )

}

export default Checkbox