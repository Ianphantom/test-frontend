import React from "react";

import Utils from "./components/Utils";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <div className='text-color-white text-16 text-bold'>
        Pop Up Button ada di bawah kanan
      </div>
      <br />
      <img
        src='https://i.imgflip.com/7f3ird.jpg'
        title='made at imgflip.com'
        alt='meme'
        width={300}
      />
      <Utils />
    </div>
  );
}

export default App;
