import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Home} from './components/Home'
import {Products} from './components/Products'
import {About} from './components/About'
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
