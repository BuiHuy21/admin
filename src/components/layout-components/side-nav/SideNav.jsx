import { sideBar } from '@/constants'
import { convertToDashedLowerCase } from '@/utils/convertString'
import { CaretDownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './sideNav.scss'
import { Tooltip } from 'antd'
const SideNav = ({ toggle }) => {
   const [activeNavItem, setActiveNavItem] = useState(null)
   const [idSide, setIdSide] = useState(null)
   const toggleNavItem = (index, id) => {
      setIdSide(id)
      setActiveNavItem((prevActiveNavItem) => (prevActiveNavItem === index ? null : index))
   }

   return (
      <div className="side-nav">
         <div className="list-side-nav">
            {sideBar?.map((sideBarItem) => (
               <div key={sideBarItem?.id}>
                  {!toggle ? (
                     <div className="category-side-nav">{sideBarItem?.titleNav}</div>
                  ) : (
                     <></>
                  )}
                  <div className="list-sub-category">
                     {sideBarItem?.listItemNav?.map((itemNav, indexSide) => (
                        <div key={indexSide}>
                           {!itemNav?.listSubNav.length > 0 ? (
                              toggle ? (
                                 <Tooltip placement="rightTop" title={itemNav?.titleItem}>
                                    <NavLink
                                       to={`/${convertToDashedLowerCase(itemNav?.titleItem)}`}
                                       className="sub-category "
                                       onClick={() => toggleNavItem(indexSide, sideBarItem?.id)}
                                    >
                                       {itemNav?.icon}
                                       <div
                                          className={
                                             toggle ? 'name-sub-category hide' : 'name-sub-category'
                                          }
                                       >
                                          {itemNav?.titleItem}
                                          {itemNav?.listSubNav.length > 0 && <CaretDownOutlined />}
                                       </div>
                                    </NavLink>
                                 </Tooltip>
                              ) : (
                                 <NavLink
                                    to={`/${convertToDashedLowerCase(itemNav?.titleItem)}`}
                                    className="sub-category "
                                    onClick={() => toggleNavItem(indexSide, sideBarItem?.id)}
                                 >
                                    {itemNav?.icon}
                                    <div
                                       className={
                                          toggle ? 'name-sub-category hide' : 'name-sub-category'
                                       }
                                    >
                                       {itemNav?.titleItem}
                                       {itemNav?.listSubNav.length > 0 && <CaretDownOutlined />}
                                    </div>
                                 </NavLink>
                              )
                           ) : (
                              <Tooltip placement="rightTop" title={itemNav?.titleItem}>
                                 <div
                                    className="sub-category"
                                    onClick={() => toggleNavItem(indexSide, sideBarItem?.id)}
                                 >
                                    {itemNav?.icon}
                                    <div
                                       className={
                                          toggle ? 'name-sub-category hide' : 'name-sub-category'
                                       }
                                    >
                                       {itemNav?.titleItem}
                                       {itemNav?.listSubNav.length > 0 && <CaretDownOutlined />}
                                    </div>
                                 </div>
                              </Tooltip>
                           )}
                           {toggle ? (
                              <></>
                           ) : (
                              itemNav?.listSubNav.length > 0 && (
                                 <div
                                    className={
                                       activeNavItem === indexSide && sideBarItem?.id == idSide
                                          ? 'sub-item-nav view'
                                          : 'sub-item-nav'
                                    }
                                 >
                                    {itemNav?.listSubNav?.map((item1) => (
                                       <NavLink
                                          to={`/${convertToDashedLowerCase(
                                             itemNav?.titleItem
                                          )}/${convertToDashedLowerCase(item1?.titleSubNav)}`}
                                          className="sub-nav-category"
                                          key={item1?.id}
                                       >
                                          {item1?.titleSubNav}
                                       </NavLink>
                                    ))}
                                 </div>
                              )
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default SideNav
