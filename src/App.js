import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

import NasaPhoto from './components/NasaPhoto';


const dummyData = {
  date: "2023-01-20",
  explanation: "The two dominant galaxies near center are far far away, 12 million light-years distant toward the northern constellation of the Great Bear. On the right, with grand spiral arms and bright yellow core is spiral galaxy M81. Also known as Bode's galaxy, M81 spans some 100,000 light-years. On the left is cigar-shaped irregular galaxy M82.  The pair have been locked in gravitational combat for a billion years. Gravity from each galaxy has profoundly affected the other during a series of cosmic close encounters.  Their last go-round lasted about 100 million years and likely raised density waves rippling around M81, resulting in the richness of M81's spiral arms.  M82 was left with violent star forming regions and colliding gas clouds so energetic that the galaxy glows in X-rays.  In the next few billion years, their continuing gravitational encounters will result in a merger, and a single galaxy will remain. This extragalactic scenario also includes other members of the interacting M81 galaxy group with NGC 3077 below and right of the large spiral, and NGC 2976 at upper right in the frame. Captured under dark night skies in the Austrian Alps, the foreground of the wide-field image is filled with integrated flux nebulae. Those faint, dusty interstellar clouds reflect starlight above the plane of our own Milky Way galaxy.",
  hdurl:"https://apod.nasa.gov/apod/image/2301/AUFSCHNAITER_Andreas_APOD_Bode_Cigare2048.jpg",
  title: "Galaxy Wars: M81 and M82"
}

function App() {
  const [data, setData] = useState();

    useEffect(() => {
   // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
   // .then(res => {
      setData(dummyData);
   // })
   // .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data}/> }
    </div>
  );
}

export default App;

