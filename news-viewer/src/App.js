import React, { useState } from 'react';
import axios from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
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
