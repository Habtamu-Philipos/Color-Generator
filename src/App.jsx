import ColorList from './ColorList'
import Values from 'values.js'
import Form from './Form'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10))
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  )
}
export default App
