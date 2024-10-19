import Search from './Search'
import Counter from './Counter'
import List from './List'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    name: 'Name 001'
  },
  {
    id: 2,
    name: 'This is 002'
  },
  {
    id: 3,
    name: 'This is 003'
  }
]

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({data: {
      items: data
    }})
  }, 5000)
})

function App() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(function() {
    promise.then((result) => {
      setList(result.data.items)
      setIsLoading(false)
    }).catch((error) => setIsError(true))
  }, [])

  function removeItem(id) {

  }

  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      <Search />
      {isError && <p>Something went wrong!</p>}
      {isLoading ? <p>Loading...</p> : <List items={list} removeItem={removeItem} />}
    </>
  )
}

export default App
