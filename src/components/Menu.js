import menuData from "../menuData.json"

const Menu =(props)=> {
  console.log(menuData)
  return(
      <div className="col-md-4">
          <figure className="menu menu-selections">
              <img src={`/images/${props.img}`} className="img-fluid rounded menu-img" alt={props.title} />
              <figcaption className="menu-caption menu-price text-end">{props.price }</figcaption>
              <figcaption className="menu-caption menu-title text-end">{props.title }</figcaption>
              <figcaption className="menu-caption menu-desc text-end">{props.desc }</figcaption>
          </figure>
      </div>
  )
} 

export default Menu