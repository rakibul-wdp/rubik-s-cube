import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import OrderNow from "../components/home/OrderNow";
import GetPuzzle from "../components/home/GetPuzzle";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      <OrderNow />
      <Accordian />
      <GetPuzzle />
    </div>
  );
};

export default Home;
