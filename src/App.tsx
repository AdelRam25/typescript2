import Greetings from './Greetings'
import Counter from './Counter'

function App() {
  return (
 
    <div className="max-w-lg mx-auto flex flex-col gap-5 p-5 bg-white rounded-lg shadow-lg mt-20 border border-black">
    <Greetings name="Hamid" />
    <Counter />
  </div>
  )  
}

export default App