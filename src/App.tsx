import { useEffect, useState } from "react";
import * as axios from "axios";
import ScrollReveal from "scrollreveal";

// Components
import Navbar from "./components/Navbar";
import { MainView } from "./components/MainView";

const catAPI = "https://aws.random.cat/meow";

export default function App() {
  const [cat, setCat] = useState("");
  const [error, setError] = useState(null);
  
  const updatePhoto = () => {
    axios.default
      .get(catAPI)
      .then((response: axios.AxiosResponse) => {
        setCat(response.data.file);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    document.body.classList.add('bg-trueGray-900');

    ScrollReveal().reveal('.main-title', {delay: 150});
    ScrollReveal().reveal('.update-button', {delay: 400})
    
    axios.default
      .get(catAPI)
      .then((response: axios.AxiosResponse) => {
        setCat(response.data.file);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  error !== null ? console.log(error) : console.log('API Fetched correctly.');

  return (
    <div className="flex flex-col h-screen text-white font-sans">
      <Navbar />
      <MainView source={cat} />
      <button onClick={() => updatePhoto()} className="update-button self-center p-2 m-3 bg-trueGray-800 rounded-lg w-min hover:shadow-lg">Another!</button>
      <p className="self-center text-trueGray-600 pb-2">This maybe can last a little long...</p>
    </div>
  );
}

