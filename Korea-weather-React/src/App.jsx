import { useState } from 'react';
import {Button} from 'react-bootstrap';

import './App.css';

function App() {
  const cities = ['서울', '인천', '강릉', '춘천', '대전', '김천', '대구', '광주', '목포', '부산', '울산', '여수', '창원']
  // const [city, setCity] = useState(cities[0]);

  return (
    <div>
      {cities.map((city, index) => {
        return <Button variant="primary" className="city-button" key={index}>{city}</Button>
      })}
    </div>
  );
}

export default App;
