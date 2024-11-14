import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleToggleModel() {
    setShowModel(!showModel);
  }

  useEffect(() => {
    const fetchApiData = async () => {

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;


       const today=(new Date()).toDateString();
       const localKey=`NASA-${today}`

       if(localStorage.getItem(localKey)){
        const apiData=JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("fetched from cache today");
        
        return
       }
       localStorage.clear()


      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData);
        console.log("fetched from api");
        
        console.log(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i class="fa-solid fa-gear fa-2xl"></i>
        </div>
      )}
      {showModel && <Sidebar data={data} handleToggleModel={handleToggleModel} />}

      {data &&(<Footer data={data} handleToggleModel={handleToggleModel} />)

      }
    </>
  );
}

export default App;
