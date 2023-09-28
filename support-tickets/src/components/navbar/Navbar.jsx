import react from 'react';

 const Navbar = ({ changeView }) => {

  const handleClick = (e) => {
    changeView(0);
  }

  const goToAdmin = (e) => {
    changeView(2);
  }
  return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={handleClick}>Stealth Health</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li onClick={goToAdmin}><a>ADMIN</a></li>
          <li>
            {/* <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100">
                <li onClick={handleClick}><a>New Ticket</a></li>
              </ul>
            </details> */}
          </li>
        </ul>
      </div>
    </div>
  )
 }

 export default Navbar;