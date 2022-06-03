import React from 'react'


export function Header() {
  return (
    <header id="header" class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">



            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link " href="/home" role="button">
                        Inicio
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Software
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="/So">Sistema operativo</a></li>
                        <li><a class="dropdown-item" href="/Programas">Programas</a></li>
                        <li><a class="dropdown-item" href="/Mantenimiento">Mantenimiento</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hardware
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="/componentesfuncionales">Componentes funcionales</a></li>
                        <li><a class="dropdown-item" href="/perifericos">Perifericos</a></li>
                        <li><a class="dropdown-item" href="/mantenimientohardware">Mantenimiento</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href='/orientacion' role="button">
                        Orientación
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>




          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Buscar..." aria-label="Search" />
          </form>

          <div class="text-end">
            <a  href="/iniciarsesion" ><button type="button" class="btn btn-outline-light me-2">Iniciar Sesión</button></a>
            <a  href="/registrarse" ><button type="button" class="btn btn-warning">Registrarse</button></a>
          </div>
        </div>
      </div>
    </header>
  )
}
