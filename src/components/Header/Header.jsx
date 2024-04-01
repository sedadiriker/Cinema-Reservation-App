import HeaderStyle from "./Header.module.css";
const Header = () => {
  return (
    <div className={`${HeaderStyle.header} d-flex align-items-center px-3`}>
      <div className={HeaderStyle.image}>
        <img className="w-100" src="./images/logo.png" alt="" />
      </div>
      <p className={`${HeaderStyle.logo} fs-4 fw-bold`}>CineDeniz</p>
    </div>
  );
};

export default Header;
