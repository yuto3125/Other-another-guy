// import React, { useState } from 'react';
import React from 'react';
// import React, { useState, useCallback } from 'react';
// import axios from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/axios';
import { Route } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://newsapi.org/v2/top-headlines?country=kr&apiKey=fc59d8e67e2a4729bc9fa464f388240f'
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    <Route path="/:category?" component={NewsPage} />
  );
  // (<div className="App">
  //   <div className="import_btn">
  //     <button onClick={onClick}>Import</button>
  //   </div>
  //   {data && (
  //     <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
  //   )}
  // </div>);
};
export default App;
