import { NavLink } from 'react-router-dom'
import { setActive } from '../components/Layout';


function NotFoundPage () {
  return (
    <div className="container">
      <div className="central-block">
        <h1 className="title">This page doesn`t exist. Go <NavLink to="/" className={setActive}>Home</NavLink></h1>
      </div>
    </div>
  )
}


export default NotFoundPage;