const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100">
      <nav>
        <h6 className="footer-title">Information</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact us</a>
        <a className="link link-hover">Community Forum</a>
        <a className="link link-hover">Latest news</a>
      </nav>
      <nav>
        <h6 className="footer-title">CN Recommends</h6>
        <a className="link link-hover">Starter</a>
        <a className="link link-hover">Everyone</a>
        <a className="link link-hover">Professional</a>
      </nav>
      <nav>
        <h6 className="footer-title">My Account</h6>
        <a className="link link-hover">Dashboard</a>
        <a className="link link-hover">My Orders</a>
        <a className="link link-hover">Recent Orders</a>
        <a className="link link-hover">Updated Profile</a>
      </nav>
      <nav>
        <h6 className="footer-title">CubeNation</h6>
        <a className="link link-hover w-80">
          ⛟ Warehouse: C-91/93, W2, Eastern Housing, Pallabi, Eastern Housing,
          Dhaka-1216
        </a>
        <a className="link link-hover">✆ 01972810849</a>
        <a className="link link-hover">TIN:479459364864</a>
      </nav>
    </footer>
  );
};

export default Footer;
