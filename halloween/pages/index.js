import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="/img/logo.png" alt="" className="nav__logo-img"></img>
            Halloween
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Candy
                </a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">
                  New
                </a>
              </li>

              <a href="#" className="button button--ghost">Support</a>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <img src="/img/nav-img.png" alt="" className="nav__img"></img>
          </div>

          <div className="nav__toggle" id="nav-toggle">
          </div>
        </nav>
      </header>
    </Layout>
  )
}
