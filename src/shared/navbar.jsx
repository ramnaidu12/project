import { Link ,Outlet} from "react-router-dom"
import Formy from "../features/form"
function Nav(){

    return(
    <div>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <span class="nav-link" ><Link to="/home">Home</Link></span>
        </li>
        <li class="nav-item">
          <span class="nav-link" ><Link to="/admin">Admin</Link></span>
        </li>
        <li class="nav-item">
          <span class="nav-link" ><Link to="/campaign">Campaigner Dash Board</Link></span>
        </li>
      </ul>
    
    </div>
  </div>
</nav>


    </div>
    </div>)

}

export default Nav