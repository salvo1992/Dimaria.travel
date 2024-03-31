import React from 'react';
import BasicExample from "../src/navigationbar/navbar"
import ChatBotModal from './modale-per-chat/modale';

function App() {
  return (
    <div className="App">
      <BasicExample >
        <ChatBotModal>
        </ChatBotModal>
    </BasicExample>
    </div>
  );
}

export default App;
