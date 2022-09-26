import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
       {location.pathname !== '/about' && (
          <>
            <p>Copyright NCIP @2022</p>
            <Link to="/about">About</Link>
          </>
        )}
    </footer>
  )
}

export default Footer
