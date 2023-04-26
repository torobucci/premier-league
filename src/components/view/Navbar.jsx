import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <p>English Premier League</p>
        <div className="right-nav">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
