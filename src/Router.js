import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

  import Loginpage from "./User/login";
  import Registrationpage from "./User/Registration";
  import Dashboard from "./User/Dashboard";

  const Routerconfig =()=> {
    return(
        <Router>
            <Routes>
                <Route path ="/" element={<Loginpage />}></Route>
                <Route path = "/Registerpage" element={<Registrationpage />}></Route>
                <Route path= "/Dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    )
  }


  export default Routerconfig;