import './App.css'
import Navbar from './components/Navbar';
import ItemListCointeiner from './components/ItemListContainer';
function App() {

  return (
    <>
      <Navbar/>
      <ItemListCointeiner greeting={"Bienvenidos"}/>
    </>
  )
}

export default App
