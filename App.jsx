import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Room from './Pages/Room'
function App() {
  return (
    <> 
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/room/:roomCode' element={<Room></Room>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
