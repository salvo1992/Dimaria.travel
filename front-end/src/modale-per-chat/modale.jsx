import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ChatBotModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    // Logica per inviare il messaggio al backend e ricevere la risposta del chatbot
    // Aggiorna chatHistory con la nuova conversazione
    // setInputText(''); // Opzionale: pulisce l'input dopo l'invio
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Apri ChatBot
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ChatBot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chat-history">
            {chatHistory.map((entry, index) => (
              <div key={index}>
                <div><strong>Utente:</strong> {entry.user}</div>
                <div><strong>Bot:</strong> {entry.bot}</div>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Scrivi un messaggio..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Invia
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatBotModal;