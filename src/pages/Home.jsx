import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import OrderNow from "../components/home/OrderNow";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      <OrderNow />
      <Accordian />
    </div>
  );
};

export default Home;
