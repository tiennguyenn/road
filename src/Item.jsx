function Item({name}) {
  function handleRemove() {
    
  }

  return (
    <li>{name}&nbsp;<button onClick={handleRemove}>Remove</button></li>
  )
}

export default Item