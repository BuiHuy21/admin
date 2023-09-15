import { useState } from 'react'
import Footer from '../layout-components/footer/Footer'
import HeaderNav from '../layout-components/header-nav/HeaderNav'
import SideNav from '../layout-components/side-nav/SideNav'
import './appLayout.scss'

const AppLayout = ({ children }) => {
   const [toggle, setToggle] = useState(false)
   const handleTogge = () => {
      setToggle(!toggle)
   }
   return (
      <>
         <HeaderNav handleTogge={handleTogge} toggle={toggle} />
         <div className="main-layout-app">
            <div className={toggle ? 'main-left main-left-hide' : 'main-left'}>
               <SideNav toggle={toggle} />
            </div>
            <div className="main-right">
               {children}
               <Footer />
            </div>
         </div>
      </>
   )
}

export default AppLayout
