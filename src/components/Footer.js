import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
      return (
         <div>
               <div style={{backgroundColor: 'rgb(66,66,66)', height: '250px', padding:'50px'}}>
               <div className="main-footer-div">
                 <div className="footer-sub-div-left">
                 <div className="sub-footer-div-1">
                 <h3>Connect</h3>
                 <h3>Contribute on GitHub</h3>
                 <h3>Support on Patreon</h3>
                 <h3>Join the Discord server</h3>
                 <h3>Follow us on Twitch</h3>
                 <h3>Find out more</h3>
                 <h3>Contact</h3>
                 </div>
                 <div className="sub-footer-div-2">
                 <h3>Get Help</h3>
                 <p>Order Status</p>
                 <p>Shipping and Delivery</p>
                 <p>Returns</p>
                 <p>Payment Options</p>
                 <p>Gift Cards</p>
                 <p>Contact Support</p>
                 </div>
                 <div className="sub-footer-div-3">
                   <h3>About Me</h3>
                   <p>News</p>
                   <p>Careers</p>
                   <p>Blog</p>
                   <p>Contct</p>
                   <p>Team</p>
                   <p>Future Plans</p>
                  </div>
                  </div>
                 <div className="sub-footer-div-4">
                   <Link href="#" class="fa fa-twitter" style={{fontSize: '40px'}}></Link>
                   <Link href="#" class="fa fa-instagram" style={{fontSize: '40px'}}></Link>
                   <Link href="#" class="fa fa-facebook" style={{fontSize: '40px'}}></Link>
                   <Link href="#" class="fa fa-twitch" style={{fontSize: '40px'}}></Link>
                  </div>
               </div>
            </div>
            <div style={{backgroundColor: 'rgb(30,30,30)', width: '100%', height: '50px', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>&#169; ajwietecha 2020</div>
         </div>
      )
    }
}