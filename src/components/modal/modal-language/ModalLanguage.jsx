import { CheckOutlined } from '@ant-design/icons'
import cn from '../../../assets/cn.png'
import fr from '../../../assets/fr.png'
import us from '../../../assets/us.png'
import './modalLanguage.scss'
const ModalLanguage = () => {
   return (
      <div className="modal-language">
         <div className="list-language">
            <div className="item-language">
               <div className="img">
                  <img src={us} alt="" />
               </div>
               <div className="nation">English</div>
               <CheckOutlined />
            </div>
            <div className="item-language">
               <div className="img">
                  <img src={cn} alt="" />
               </div>
               <div className="nation">Chinese</div>
               <CheckOutlined />
            </div>
            <div className="item-language">
               <div className="img">
                  <img src={fr} alt="" />
               </div>
               <div className="nation">French</div>
               <CheckOutlined />
            </div>
         </div>
      </div>
   )
}

export default ModalLanguage
