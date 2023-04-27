import Menu from "../components/Menu"
import menuData from "../menuData.json"
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


const Main =()=> {
    const menuComponents = menuData.map(item => {
        return <Menu 
            key={item.id}
            img={item.img}
            price={item.price}
            desc={item.desc}
            title={item.title}
        />
    })

    return(
        <>
            <main>
        <div className="blahBlahBlah">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="top-statement">
                            <h2>
                                Top Ingredients Only In Our Kitchen
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-img">     
                        <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 img-fluid d-block failure'
        itemId={1}
        src='https://static.boredpanda.com/blog/wp-content/uploads/2021/07/CN8GAGgrVY6-png__700.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 img-fluid d-block failure'
        itemId={2}
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3c%2F66%2Fc8%2F3c66c889ff40208bde537da3d33f56fd.jpg&f=1&nofb=1&ipt=280ce0781b4beb05d64ce183954fb7fa8752843e8056d15621fed40d7d619933&ipo=images'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 img-fluid d-block failure'
        itemId={3}
        src='https://leitesculinaria.com/wp-content/uploads/2021/05/perfect-hot-dog.jpg'
        alt='...'
      />
    </MDBCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="middle-section">
            <div className="container">
                <div className="row"> 
                    {menuComponents}
                </div>
            </div>
        </div>
        <div className="Reservations">
            <div className="container">
                <div className="row">
                    <col-4>
                </col-4>
                <h3>
                    Reservations and orders may be placed anytime
                </h3>
                </div>
            </div>
        </div>
        <div className="threeParText">
            <div className="container">
                <div className="row">              
                    <div className="col-md-4 last-col">
                        
                        <p className="text-dark">Offer 1</p>
                        <h4>
                            Mug
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda sit aliquid, porro reprehenderit cum voluptatum ipsum expedita inventore laboriosam architecto, natus aliquam quas fugiat!</p>
                    </div>
                    <div className="col-md-4 last-col">
                        
                        <p className="text-dark">Offer 2</p>
                        <h4>
                            Silverware
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda sit aliquid, porro reprehenderit cum voluptatum ipsum expedita inventore laboriosam architecto, natus aliquam quas fugiat!</p>
                    </div>
                    <div className="col-md-4 last-col">
                        
                        <p className="text-dark">Offer 3</p>
                        <h4>
                            Heart
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda sit aliquid, porro reprehenderit cum voluptatum ipsum expedita inventore laboriosam architecto, natus aliquam quas fugiat!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="clientLogos">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <p>Company Inc.</p>
                    </div>
                    <div className="col-2">
                        <p>The Clients.</p>
                    </div>
                    <div className="col-2">
                        <p>Brand Name.</p>
                    </div>
                    <div className="col-2">
                        <p>Le Restaurant de Oui.</p>
                    </div>
                    <div className="col-2">
                        <p>Food Restaurant.</p>
                    </div>
                    <div className="col-2">
                        <p>Incorporation Co.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
    )
}

export default Main