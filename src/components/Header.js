// with title and main navigation).

function Header(props) {
  return (
    <header>
      <div class="container flexbox">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">New released</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
