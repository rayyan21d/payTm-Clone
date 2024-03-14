import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import SendMoney from './pages/SendMoney'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="/error" element={ <Error/> }/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
