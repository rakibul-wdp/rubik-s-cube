import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="card card-side bg-base-100 shadow-xl w-[80%] mx-auto my-40">
      <figure>
        <img src={image_url} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h3 className="text-lg font-semibold">৳{price}</h3>
        <h3 className="text-lg font-semibold">{brand}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
