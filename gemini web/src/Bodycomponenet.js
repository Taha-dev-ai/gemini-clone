import React, { useState } from 'react';
import "./css/body.css";
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';

function Bodycomponenet() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const generateAnswer = () => {
    console.log(prompt);
    
    fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAxo8cEojAukOQK70Pw6StGUfqGgtGKwj8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          { parts: [{ 'text': prompt }] }
        ]
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const text = data.candidates[0].content.parts[0].text;
      console.log("Raw API Response:", text);

      const modified = text.split('\n\n');
      console.log("Modified Text:", modified);

      const res = modified.map((items) => {
        if (items.startsWith('**') && items.endsWith('**')) {
          const heading = items.replace(/\*\*/g, "");
          return { type: 'heading', content: heading };
        } else {
          return { type: 'paragraph', content: items };
        }
      });

      console.log("Processed Response:", res);
      setResponses(prevResponses => [...prevResponses, { id: Date.now(), content: res }]);
    })
    .catch(error => {
      console.error('Error generating answer:', error);
    });
  };

  return (
    <div className='container'>
      <div className="text pt-5">
        <h1>HELLO MUHAMMAD</h1>
        <h1>How can I help You today</h1>
      </div>
      <div className="container-sm">
        <div className="cards">
          <div className="row mb-2">
            <div className="col-md-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special Title Treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special Title Treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special Title Treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special Title Treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {responses.length > 0 && (
          <div className='container mb-2' id='output'>
            {responses.map((response) => (
              <div className="row mb-4" key={response.id}>
                {response.content.map((item, index) => (
                  item.type === 'heading' ? (
                    <h2 className="col-12" key={index}>{item.content}</h2>
                  ) : (
                    <p className="col-12" key={index}>{item.content}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container-sm" id='fotter'>
        <div className="outer-msg">
          <div className="msg-sender mb-4 col-md-8 p-4">
            <div className="messageBox">
              <div className="msg-box">
                <div className="fileUploadWrapper">
                  <label htmlFor="file">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                      <circle strokeWidth="20" stroke="#6c6c6c" fill="none" r="158.5" cy="168.5" cx="168.5"></circle>
                      <path strokeLinecap="round" strokeWidth="25" stroke="#6c6c6c" d="M167.759 79V259"></path>
                      <path strokeLinecap="round" strokeWidth="25" stroke="#6c6c6c" d="M79 167.138H259"></path>
                    </svg>
                    <span className="tooltip">Add an image</span>
                  </label>
                  <input type="file" id="file" name="file" />
                </div>
                <input placeholder="Message..." type="text" value={prompt} onChange={e => setPrompt(e.target.value)} id="messageInput" />
              </div>
              <button id="sendButton" onClick={generateAnswer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                  <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="butom-text">
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. <a href="">Your privacy and Gemini Apps</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodycomponenet;
