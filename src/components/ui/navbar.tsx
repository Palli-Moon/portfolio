export default function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'></div>
      <div className='navbar-center'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>The Man</a>
          </li>
          <li>
            <details>
              <summary>The Myth</summary>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>The Legend</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'></div>
    </div>
  );
}
