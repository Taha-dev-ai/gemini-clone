import React  from 'react';
import SendIcon from '@mui/icons-material/Send';
import  Navbar  from './Navbar';
// import  Navbar  from './Bodycomponenet';
import Bodycomponenet from './Bodycomponenet';
// import './app.css'
function ChatApi() {
  

    return (
        <>
         <Navbar/>
         <Bodycomponenet/> 
        </>
    );
}

export default ChatApi;







// .........................................good code...............................
// import Navbar from './Navbar';
// import BodyComponent from './Bodycomponenet';
// import React, { useState } from 'react';
// import SendIcon from '@mui/icons-material/Send';

// function ChatApi() {
//     const [generatedText, setGeneratedText] = useState('');
//     const [prompt, setPrompt] = useState('');

//     const generateAnswer = () => {
//         if (prompt.trim()) {
//             fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAxo8cEojAukOQK70Pw6StGUfqGgtGKwj8', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     contents: [
//                         { parts: [{ text: prompt }] }
//                     ]
//                 })
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
//                 if (text) {
//                     setGeneratedText(text);
//                 } else {
//                     throw new Error('No text found in response');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error generating answer:', error);
//                 // Handle errors
//             });
//         } else {
//             console.error('Prompt is empty');
//         }
//     };

//     return (
//         <div>
//           <Navbar/>
//           <BodyComponent/>
//             <h1>Chat API</h1>
//             <div className="msg">
//                 <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter a prompt here" />
//             </div>
//             <div className="sender" onClick={generateAnswer}><SendIcon /></div>
//             {generatedText && (
//               <div>
//                     <h2>Generated Text</h2>
//                     <p>{generatedText}</p>
//                 </div>
//             )}
//         </div> 
//     );
// }

// export default ChatApi;


{/* // <button onClick={generateAnswer}>Generate Answer</button> */}

// import React from 'react';
// import Navbar from './Navbar';
// import BodyComponent from './Bodycomponenet';
// // import { GenerativeModel } from '@google/generative-ai';

// function App() {
//   return (
    
//     <div className="gemini">
//       <Navbar />
//       <div className="Body">
//           <BodyComponent />
//       </div>
//     </div>
//   );
// }

// export default App;










// // node --version # Should be >= 18
// // npm install @google/generative-ai

// // import React from 'react';

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai"

// const MODEL_NAME = "gemini-1.5-pro-latest";
// const API_KEY = "AIzaSyAxo8cEojAukOQK70Pw6StGUfqGgtGKwj8";

// async function runChat() {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 1,
//     topK: 0,
//     topP: 0.95,
//     maxOutputTokens: 8192,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [
//       {
//         role: "user",
//         parts: [{ text: "what is js"}],
//       },
//       {
//         role: "model",
//         parts: [{ text: "## JavaScript: The Web's Programming Language\n\nJS, short for JavaScript, is a high-level, dynamic, and interpreted programming language. It's one of the core technologies of the World Wide Web, alongside HTML and CSS, and plays a crucial role in making web pages interactive and dynamic. \n\nHere's a breakdown of what JS is all about:\n\n**What JavaScript Does:**\n\n* **Interactivity:** It allows users to interact with web pages beyond just viewing static content. This includes things like clicking buttons, submitting forms, playing animations, and dynamically updating content.\n* **Dynamic Effects:** JS enables the creation of various dynamic effects on web pages, such as:\n    * **Animations:** Making elements move, fade, or change over time.\n    * **Pop-ups:** Creating alert boxes, confirmation prompts, and other interactive elements.\n    * **Form Validation:** Checking user input for errors before submission.\n* **Client-Side Scripting:** JS primarily runs on the user's web browser (client-side), which means it can react to user actions without needing to send requests to a server. This makes web pages feel more responsive and interactive.\n* **Server-Side Development (Node.js):** With platforms like Node.js, JavaScript can also be used for server-side programming, handling tasks like database interactions and server-side logic.\n\n**Key Features of JavaScript:**\n\n* **Object-Oriented:** Though not a fully object-oriented language like Java or C++, JS supports object-oriented concepts, allowing you to create reusable code modules.\n* **Prototype-Based:** Instead of classes, JS uses prototypes, which are objects that other objects can inherit properties and methods from. \n* **Functional Programming:** JS supports functional programming paradigms, enabling you to write concise and expressive code using functions as first-class citizens.\n* **Event-Driven:** JS responds to events triggered by user interactions or other sources, making it suitable for creating dynamic and responsive applications.\n\n**Learning Resources:**\n\nIf you're interested in learning JavaScript, here are some excellent resources:\n\n* **MDN Web Docs:** Comprehensive documentation and tutorials on all aspects of web development, including JavaScript.\n* **freeCodeCamp:** Interactive platform with courses and projects to learn JavaScript and other web development technologies.\n* **Codecademy:** Another platform with interactive courses and projects for learning JavaScript.\n* **Eloquent JavaScript (book):** A popular book that teaches JavaScript in a clear and engaging way.\n\n**I hope this explanation helps! Let me know if you have any other questions.**"}],
//       },
//     ],
//   });

//   const result = await chat.sendMessage("YOUR_USER_INPUT");
//   const response = result.response;
//   console.log(response.text());
// }

// runChat();




// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.generateContent = this.generateContent.bind(this);
//   }

//   async generateContent() {
//     console.log("Loading...");
//     try {
//       const response = await axios.get("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAxo8cEojAukOQK70Pw6StGUfqGgtGKwj8", {
//         contents: [
//           { contents: [{ parts: [{ text: "Write a story about a magic backpack" }] }] }
//         ],
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error generating answer:", error);
//     }
//   }

//   render() {
//     return (
//       <>
//         <h1>Chat API</h1>
//         <button onClick={this.generateContent}>Generate Answer</button>
//       </>
//     );
//   }
// }

// export default App;
