import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainGalleryLayout from "./components/MainGalleryLayout";
import GalleryDataContext from "./context/GalaryDataContext";
import data from "./mock-data/data.json";

function App() {
  const [gridItems, setGridItems] = useState([]);
  const [selectedArr, setSelectedArr] = useState([]);

  useEffect(() => {
    setGridItems([...data]);
  }, []);

  function handleDelete() {
    const updatedArray = gridItems.filter(
      (item) => !selectedArr.includes(item.id)
    );

    setGridItems([...updatedArray]);
    setSelectedArr([]);
  }

  return (
    <GalleryDataContext.Provider
      value={{
        selectedArr,
        setSelectedArr,
        gridItems,
        setGridItems,
        handleDelete,
      }}
    >
      <div className="w-full h-fit flex justify-center pb-10 ">
        <div className="w-11/12 md:w-8/12 border h-fit border-black mt-5 rounded-xl shadow-md shadow-gray-500 bg-gray-100">
          <Header />
          <hr className="border border-gray-300"></hr>
          <MainGalleryLayout />
        </div>
      </div>
    </GalleryDataContext.Provider>
  );
}

export default App;
