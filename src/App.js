import React from 'react';
import MainSection from './components/MainSection'
import { Background, Main } from './components/Styles.js'

function App() {
  return (
    <Background>
      <Main>
        <MainSection />
      </Main>
    </Background>
  );
}

export default App;
