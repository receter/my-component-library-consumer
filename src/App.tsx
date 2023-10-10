import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// If this is imported, the "I should not be bold" text will not be bold anymore.
// import { Input } from '@receter/my-component-library';
import { ComponenThatUsesHelperStyles } from './ComponenThatUsesHelperStyles';
import { ComponentThatUsesLabel } from './ComponentThatUsesLabel';
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ComponenThatUsesHelperStyles />
        <ComponentThatUsesLabel />
{/*          <Input
          placeholder="Custom count"
          value={'Can\'t change me!'}
        /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
