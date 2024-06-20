import React from 'react'
export default function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img class="navbar-brand" src='..\src\icons\icon.ico' /> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-md-auto gap-2">
                    <li class="nav-item rounded">
                    <a class="nav-link active" aria-current="page" ><i class="bi bi-house-fill me-2"></i>Home</a>
                    </li>
                    <li class="nav-item rounded">
                    <a class="nav-link" ><i class="bi bi-people-fill me-2"></i>About</a>
                    </li>
                    <li class="nav-item rounded">
                    <a class="nav-link" ><i class="bi bi-telephone-fill me-2"></i>Contact</a>
                    </li>
                    <li class="nav-item dropdown rounded">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill me-2"></i>Profile</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" >Account</a></li>
                        <li><a class="dropdown-item" >Another action</a></li>
                        <li>
                        <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" >Logout</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            
            </nav>
        </div>
    )
}