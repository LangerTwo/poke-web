import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error } = useFetch()

  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {data?.map((poke) => (
          <div className='w-24' key={poke.id}>
            {poke.sprites?.other?.dream_world?.front_default && ( 
              <img 
                src={poke.sprites.other.dream_world.front_default} 
                alt={poke.name} 
                className='mb-4 h-20 cursor-pointer'
              />
            )}
            <div className='flex justify-between'>
              <h3>{poke.name}</h3>
              <p>{poke.id}°</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;