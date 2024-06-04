const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-48">
      <h1 className="text-4xl font-bold my-10">About Us</h1>
      <div className="card w-[60%] bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Welcome To CubeNation</h2>
          <p>
            Cube Nation is the largest Cube store in Bangladesh. We started our
            journey back in August 2016 for the betterment of the Bangladesh
            cubing community. We sell everything related to speedcubing,
            puzzle-collecting, accessories, and maintenance items. With having
            multiple speedcubers in the management team, we provide you with an
            up-to-date solution to your puzzle-related problems.
          </p>
          <p>
            Our mission is to popularize puzzles among the people and build a
            safe haven for puzzlers to rest in. While, our vision is to build a
            haven for puzzlers of all sorts. We are constantly working toward
            this goal.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Original Puzzles</div>
            <div className="stat-value my-3">9,700</div>
            <div className="stat-desc">Right from manufacturers overseas.</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Orders fulfilled</div>
            <div className="stat-value my-3">14,000</div>
            <div className="stat-desc">
              All over Bangladesh from various puzzlers as of 2022.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
