import React from 'react'
import './modalAccount.scss'
import {
   EditOutlined,
   SettingOutlined,
   ShopOutlined,
   QuestionCircleOutlined,
   LogoutOutlined,
} from '@ant-design/icons'

const ModalAccount = () => {
   return (
      <div className="modal-account">
         <div className="list-item-account">
            <div className="item-account">
               <EditOutlined />
               <div className="name-item-account">Edit Profile</div>
            </div>
            <div className="item-account">
               <SettingOutlined />
               <div className="name-item-account">Account Setting</div>
            </div>
            <div className="item-account">
               <ShopOutlined />
               <div className="name-item-account">Account Billing</div>
            </div>
            <div className="item-account">
               <QuestionCircleOutlined />
               <div className="name-item-account">Help Center</div>
            </div>
            <div className="item-account">
               <LogoutOutlined />
               <div className="name-item-account">Sign Out</div>
            </div>
         </div>
      </div>
   )
}

export default ModalAccount
