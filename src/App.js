import React from 'react';
import Pages from './components/Pages';
import { StateMachineProvider, } from 'little-state-machine';
import { ChakraProvider, Box } from '@chakra-ui/react';
import "./components/Style.css";
function App() {
  return (
    <ChakraProvider>
      <Box className='fillbox'>
    <StateMachineProvider>
      <div className='container1'>
      <div className="container2">
        <h1>My Skill Level</h1>
        <p>Answer the following questions to begin your plan</p>

          
      </div>
      <hr></hr>
      <Pages />
      </div>
    </StateMachineProvider>
      </Box>
    </ChakraProvider>
  );
}
export default App;