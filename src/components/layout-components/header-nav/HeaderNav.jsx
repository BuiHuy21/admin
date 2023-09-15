import ModalLanguage from '@/components/modal/modal-language/ModalLanguage'
import ModalNoti from '@/components/modal/modal-noti/ModalNoti'
import useClickOutSide from '@/hook/useClickOutSide'
import {
   BellOutlined,
   GlobalOutlined,
   MenuFoldOutlined,
   SearchOutlined,
   SettingOutlined,
   MenuUnfoldOutlined,
} from '@ant-design/icons'
import avt from '../../../assets/avt.jpg'
import logo from '../../../assets/logo.png'
import './headerNav.scss'
import ModalAccount from '@/components/modal/modal-account/ModalAccount'
import { Link } from 'react-router-dom'
const HeaderNav = ({ handleTogge, toggle }) => {
   const { show, setShow, nodeRef } = useClickOutSide()
   const {
      show: showLaguage,
      setShow: setShowLanguage,
      nodeRef: nodeRefLanguage,
   } = useClickOutSide()
   const { show: showAccount, setShow: setShowAccount, nodeRef: nodeRefAccount } = useClickOutSide()
   const handleOpenModalNoti = () => {
      setShow(!show)
   }
   const handleOpenModalLang = () => {
      setShowLanguage(!showLaguage)
   }
   const handleOpenModalAccount = () => {
      setShowAccount(!showAccount)
   }

   return (
      <div className="header-nav">
         <div className="logo">
            <Link to={'/'}>
               <img src={logo} alt="" />
            </Link>
         </div>
         <div className="main-header-nav">
            <div className="header-nav__left">
               {toggle ? (
                  <MenuUnfoldOutlined onClick={handleTogge} />
               ) : (
                  <MenuFoldOutlined onClick={handleTogge} />
               )}

               <div className="search-header">
                  <input type="text" placeholder="Search..." />
                  <SearchOutlined />
               </div>
            </div>
            <div className="header-nav__right">
               <div className="noti" ref={nodeRef}>
                  <BellOutlined onClick={handleOpenModalNoti} />
                  <div className="count-noti">4</div>
                  {show && <ModalNoti />}
               </div>
               <div className="language" ref={nodeRefLanguage}>
                  <GlobalOutlined onClick={handleOpenModalLang} />
                  {showLaguage && <ModalLanguage />}
               </div>
               <SettingOutlined />
               <div className="infor-header" ref={nodeRefAccount}>
                  <div className="img">
                     <img src={avt} alt="" />
                  </div>
                  <div className="desc" onClick={handleOpenModalAccount}>
                     <div className="name">Charlie Howard</div>
                     <div className="intro">Frontend Developer</div>
                  </div>
                  {showAccount && <ModalAccount />}
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderNav
