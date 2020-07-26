import React, { useState } from 'react';
import axios from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    });
  };
  return (
    <div className="App">
      <div className="import_btn">
        <button onClick={onClick}>Import</button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
};

export default App;
