import avt from '../../../assets/avt.jpg'
import avt2 from '../../../assets/avt2.jpg'
import avt3 from '../../../assets/avt3.jpg'
import './modal.scss'
const ModalNoti = () => {
   return (
      <div className="modal-noti">
         <div className="header-modal">
            <div className="notify">Notification</div>
            <div className="btn-clear">Clear</div>
         </div>
         <div className="content-modal">
            <div className="list-item-modal">
               <div className="item-modal">
                  <div className="img">
                     <img src={avt} alt="" />
                  </div>
                  <div className="content-item">
                     <span>Erin Gonzales</span> has comment on your board
                  </div>
                  <div className="time">7:57PM</div>
               </div>
               <div className="item-modal">
                  <div className="img">
                     <img src={avt2} alt="" />
                  </div>
                  <div className="content-item">
                     <span>Frederick Adams</span> has mentioned you in a post
                  </div>
                  <div className="time">3:12PM</div>
               </div>
               <div className="item-modal">
                  <div className="img">
                     <img src={avt3} alt="" />
                  </div>
                  <div className="content-item">
                     <span>Erin Gonzales</span>has comment on your board
                  </div>
                  <div className="time">7:57PM</div>
               </div>
               <div className="item-modal">
                  <div className="img">
                     <img src={avt} alt="" />
                  </div>
                  <div className="content-item">
                     <span>Erin Gonzales</span>has comment on your board
                  </div>
                  <div className="time">7:57PM</div>
               </div>
            </div>
         </div>
         <div className="view-all">View all</div>
      </div>
   )
}

export default ModalNoti
