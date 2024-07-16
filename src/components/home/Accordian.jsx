const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is CubeNation?
        </div>
        <div className="collapse-content">
          <p>
            Cube Nation is the largest Cube store in Bangladesh. We started our
            journey back in August 2016 for the betterment of the Bangladesh
            cubing community. We sell everything related to speedcubing,
            puzzle-collecting, accessories, and maintenance items. With having
            multiple speedcubers in the management team, we provide you with an
            up-to-date solution to your puzzle-related problems.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How does CubeNation works?
        </div>
        <div className="collapse-content">
          <p>
            CubeNation works online with a physical warehouse in Dhaka. When you
            place an order our team verifies you and checks inventory. If we
            have it in stock, we process the order and arrange delivery. You
            will receive SMS/Email/Push notifications for every update. If the
            product is out of stock, we will contact you for later steps.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Which payment method does CubeNation accept?
        </div>
        <div className="collapse-content">
          <p>
            CubeNation accepts Bkash Payment, DBBL Rocket, Nagad, Bank transfer,
            Amex, Mastercard, Visa, and Cash on Delivery.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the delivery time and charge?
        </div>
        <div className="collapse-content">
          <p>
            We Currently Ship our products via Pathao courier. ♦ 24 hours to
            Deliver inside Dhaka Metro - 60 BDT ♦ 2-3 Days outside Dhaka - 100
            BDT We offer Free shipping for orders over 1000 BDT.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is CubeNation trusted?
        </div>
        <div className="collapse-content">
          <p>
            Our team works with multiple high-end puzzle manufacturers like GAN,
            MoYu, QiYi, Yuxin, etc. to ensure that we can offer you the best
            products in the market. We have been in businesss since 2016.
            Considering we are still here, speaks for our trustworthyness. If
            you still do not trust us, it is fine. We have a cat at our
            warehouse named Mr. Moni. We will ask him to scratch you for not
            trusting us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
