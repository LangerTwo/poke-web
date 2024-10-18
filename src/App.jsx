import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error } = useFetch()

  return (
    <>
      <div>
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.results?.map((poke) => (
            <li key={poke.name}>{poke.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App