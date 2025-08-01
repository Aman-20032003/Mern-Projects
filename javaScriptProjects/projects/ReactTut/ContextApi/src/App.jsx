import { useContext } from 'react'
// import Counter from './Counter'
// import { CounterContext } from './Context/Counter'
import Item from './Context/item'
import Cart from './Cart'

function App() {
  // const counterState= useContext(CounterContext);
  return (
    <div className='app'>
      <Item name="MacBookPro" price={100000}/>
      <Item name="IPhone 15" price={70000}/>
      <Item name="Samsung g45" price={65000}/>
      <Cart/>
    {/* <h1>Counter is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
    </div>

  )
}

export default App
