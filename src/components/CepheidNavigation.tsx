import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";
export function CepheidNavigation() {
  const { pathname } = useLocation();
  return (
    <Navbar className="cepheid-tabbar" aria-label="Навигация по атласу">
      <Nav>
        <Nav.Link
          as={NavLink}
          to="/feed"
          className={pathname.startsWith("/feed") ? "active" : ""}
        >
          <span aria-hidden="true">≡</span>Лента
        </Nav.Link>
        <Nav.Link
          as="button"
          type="button"
          disabled
          title="Будет доступно в следующей лабораторной"
        >
          <span aria-hidden="true">＋</span>Добавление
        </Nav.Link>
        <Nav.Link as={NavLink} to="/classes">
          <span aria-hidden="true">⊞</span>Плитка
        </Nav.Link>
        <Nav.Link
          as="button"
          type="button"
          disabled
          title="Будет доступно в следующей лабораторной"
        >
          <span aria-hidden="true">⇥</span>Войти
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
