import React from 'react'
import { Button } from 'legion-ui'

const App = () => {
  return (
    <div style={{
      justifyContent: 'space-around'
    }}>
      <Button size="lg">Solid</Button>
      <Button size="lg" disabled>Disabled</Button>
      <Button size="md">Solid</Button>
      <Button size="md" disabled>Disabled</Button>
      <Button size="sm">Solid</Button>
      <Button size="sm" disabled>Disabled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="soft">Soft</Button>

    </div>
    
  )
}

export default App