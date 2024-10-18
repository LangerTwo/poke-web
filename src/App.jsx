import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error } = useFetch()

  return (
    <>
      <div className='container mx-auto w-1/2'>
        <ul className='flex flex-col justify-center text-center'>
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