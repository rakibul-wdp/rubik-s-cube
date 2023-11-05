import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { FaRegImage } from "react-icons/fa";
import GalleryDataContext from "../Contexts/GalaryDataContext";
import GridItem from "./GridItem";

let current = -1;

const MainGalleryLayout = () => {
  const { gridItems, setGridItems } = useContext(GalleryDataContext);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const swap = (start, destination) => {
    if (start > destination) {
      for (let i = start; i > destination; i--) {
        let temp = gridItems[i];
        gridItems[i] = gridItems[i - 1];
        gridItems[i - 1] = temp;
      }
    } else {
      for (let i = start; i < destination; i++) {
        let temp = gridItems[i];
        gridItems[i] = gridItems[i + 1];
        gridItems[i + 1] = temp;
      }
    }

    setGridItems([...gridItems]);
  };

  const dragHandler = (e) => {
    const { active, over } = e;

    if (active && over && current !== over.id - 1) {
      swap(current, over.id - 1);
      current = over.id - 1;
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const newGridItems = [];

      for (const file of files) {
        const reader = new FileReader();
        const randomNum = Math.floor(Math.random() * 9999901) + 100;
        reader.onload = () => {
          const blob = new Blob([reader.result], { type: file.type });
          const blobURL = URL.createObjectURL(blob);

          const temp = {
            id: randomNum.toString(),
            img: blobURL,
          };

          newGridItems.push(temp);

          if (newGridItems.length === files.length) {
            setGridItems((prevGridItems) => [
              ...prevGridItems,
              ...newGridItems,
            ]);
          }
        };

        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="p-5">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
          <DndContext
            onDragStart={(e) => {
              current = e.active.id - 1;
            }}
            onDragOver={dragHandler}
            sensors={sensors}
          >
            <AnimatePresence>
              {gridItems.map((item, index) => (
                <GridItem item={item} key={item.id} index={index} />
              ))}
            </AnimatePresence>
          </DndContext>

          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <div className="text-black bg-white rounded-lg  gap-2 border-gray-600 border-2 border-dashed  text-2xl aspect-square flex flex-col justify-center items-center">
              <FaRegImage />
              <div className="text-sm font-semibold">Add images</div>
            </div>
          </label>
          <input
            multiple
            onChange={handleFileChange}
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainGalleryLayout;
