import Item from './Item'

function List({items}) {
  return (
    <>
      <h2>List</h2>
      <ul>
        {items.map((item) => <Item key={item.id} name={item.name} />)}
      </ul>
    </>
  )
}

export default List