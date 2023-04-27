import Navbar from "./Navbar"

const Header =()=> {
    return (

    <>
    <header>
     <div className="notSoHeader">
        
     </div>
        <div className="mainHeader">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Le Restaurant de Oui</h1>
                    </div>
                    <div className="col-1">
                        <img className="img-fluid chefLogo text-start" src="https://cdn-icons-png.flaticon.com/512/62/62673.png" />
                    </div>
                    <div className="col-6">
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header