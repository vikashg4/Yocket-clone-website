import React from "react";

function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-light w-100 position-fixed"
      style={{ zIndex: 10 }}
    >
      <div class="container-fluid">
        <img
          id="navbar-logo"
          src="https://dreamstofly.com/web/images/logo-dark.png"
          alt=" "
          height="30px"
          width="150px"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a
                class="nav-link active  fw-bold"
                aria-current="page"
                href="#"
                id="home-item"
                style={{
                  color: "#314047",
                }}
              >
                Home
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link fw-bold "
                href="#"
                id="about-item"
                style={{
                  color: "#314047",
                }}
              >
                SOP MAKER
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link fw-bold  "
                href="#"
                id="about-item"
                style={{
                  color: "#314047",
                }}
              >
                CONNECT
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link fw-bold  "
                href="#"
                id="about-item"
                style={{
                  color: "#314047",
                }}
              >
                POST ADMIT SERVICES
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link fw-bold "
                href="#"
                id="about-item"
                style={{
                  color: "#314047",
                }}
              >
                BLOGS
              </a>
            </li>

            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle  fw-bold "
                id="service-item"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#314047",
                }}
              >
                EXAM PREP
              </a>
              <ul class="dropdown-menu  ">
                <li></li>

                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    IELTS ACADEMIC
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    IELTS GENERAL
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    TOEFL-IBT
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    {" "}
                    PTE
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link  fw-bold  "
                id="contact-item"
                href="#"
                style={{
                  color: "#314047",
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            class="btn fw-bold fs-5"
            id="btn-aptn"
            type="submit"
            style={{
              color: "#10C0E7",
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
