import styled from 'styled-components'
import Header from './components/Header'
export const All = styled.div`
  width:100%;
`
const App = () => {
  return (
    <All>
      <Header/>
    </All>
  )
}

export default App