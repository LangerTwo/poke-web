import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error } = useFetch()

  return (
    <>
      <div className='container mx-auto w-1/2 flex flex-col justify-center items-center'>
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {data?.map((poke) => (
          <div key={poke.id}>
            {poke.sprites?.other?.dream_world?.front_default && ( 
              <img 
                src={poke.sprites.other.dream_world.front_default} 
                alt={poke.name} 
                className='mb-4'
              />
            )}
            <h3>{poke.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;