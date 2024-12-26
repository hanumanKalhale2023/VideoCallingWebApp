
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    
  const [roomCode, setRoomCode]=useState("")
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate(`/room/${roomCode}`)
  }
  return (
    <>
      <div className='Homepage'>
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Enter Room Code </label> <br />
                <input value={roomCode} type="text" name='roomCode' required placeholder='Enter Room Code' onChange={(e)=>setRoomCode(e.target.value)}/><br />
               
            </div>
            <button type='submit' >Enter Room</button>
        </form>
      </div>
    </>
  )
}

export default Home
