const OrderNow = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-24 py-10 mt-24">
      <div className="card-body">
        <h2 className="card-title">Nationwide Delivery to Your Home</h2>
        <p className="my-5 mr-16">
          It does not matter if you are a professional Speedcuber or, a casual
          puzzle lover. We have everything for your puzzling life to flourish.
          See Our latest discounted products from here and get a special
          discount.
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-accent">Order Now</button>
        </div>
      </div>
      <figure>
        <img
          src="https://cubenationshop.com/_next/image?url=%2Fcta%2Fdelivery-boy.png&w=384&q=75"
          className="mr-10"
          alt="Movie"
        />
      </figure>
    </div>
  );
};

export default OrderNow;
