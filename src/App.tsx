import { Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import routes from './config/routes'
function App() {

  return (
    <HashRouter>
        <Navbar />
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                    <route.component />
                }
                />
            )) }
          </Routes>
    </HashRouter>
  )
}

export default App
