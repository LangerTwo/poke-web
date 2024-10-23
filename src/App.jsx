import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error } = useFetch()

  return (
    <>
      <div className=''>
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {data?.map((poke) => (
          <div className='flex w-full justify-between border items-center' key={poke.id}>
              <p className='text-xl'>{poke.id}°</p>
              {poke.sprites?.other?.dream_world?.front_default && ( 
                <img 
                  src={poke.sprites.other.dream_world.front_default} 
                  alt={poke.name} 
                  className='h-10 w-10 cursor-pointer'
                />
              )}
              <div>
                <h3 className='text-xl'>{poke.name}</h3>
              </div> 
              <div className="flex gap-5">
                  {poke.types.map(type => (
                    <span key={type.type.name} className={`${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
              </div>          
          </div>
        ))}
      </div>
    </>
  )
}

export default App;