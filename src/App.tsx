import './App.css'

const BRANCH = import.meta.env.VITE_APP_BRANCH;

function App() {

  return (
    <>
      <p>Hello in {BRANCH}</p>
    </>
  )
}

export default App
