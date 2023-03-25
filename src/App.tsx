import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import {About} from './pages/About'
import {Navigation} from './components/Navigation'

function App() {
  
  return (
      <div>
        <Navigation />

        <Container className='mb-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </div>
  )
}

export default App
