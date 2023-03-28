// import React, { Component } from 'react';
// import GladepayButton from 'react-gladepay';

// type PaymentProps = {
//     response: 'string'
// }

// class GladePayment extends Component {
 
//     	state = {
//     		MID: "GP0000001", //Gladepay Merchant ID
//     		email: "demo@gmail.com",  // customer email
//         amount: 10000, //equals NGN100,
//         is_production: false //is_production,
//     	}
 
//     	callback = (response: PaymentProps) => {
//     		console.log(response); // card charged successfully, get reference here
//     	}
 
//     	close = () => {
//     		console.log("Payment closed");
//     	}
 
//       render() {
//         return (
//           <div>
//             <p>
//               <GladepayButton
//                 text="Checkout"
//                 className="payButton"
//                 callback={this.callback}
//                 close={this.close}
//                 disabled={true} 
//                 embed={true} 
//                 email={this.state.email}
//                 amount={this.state.amount}
//                 MID={this.state.MID}
//                 tag="button"
//               />
//             </p>
//           </div>
//         );
//       }
//     }


// export default GladePayment

