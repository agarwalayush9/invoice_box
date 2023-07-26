import Fotter from './Fotter';
import invoice_card from './uploads/invoice_card.png';

const About = () => {
  return (
    <div className="content" id="about">
      <h1 className='expenses' style={{fontSize:"25px"}}>Track Your Expenses</h1>
      <p style={{textAlign:"left",padding:"10px",paddingTop:"0px",marginTop:'-5px',paddingBottom:"20px"}}>Suppose you planned for a trip and made a budget of 'X' amount, at the end of the trip you got to know that the expenditure cost 'Y' amount.
      Now you are trying to remember that where have you paid extra, out of the budget. It's hard to remember right!<br/> <br/> 
      Inorder to track all those expenses an invoice card for every transaction can be created with the specified date. Therefore, I made this project from the learnings of MERN stack development. For me this web application is an learning based project made from scratch.
      </p>
      <h2 className='expenseF' style={{textAlign:"left", paddingLeft:"10px"}}>Features</h2>
      <div id='features'>
      <p style={{textAlign:"left",padding:"10px",marginTop:"-15px"}}>
      Invoice Box is a web application that allows users to create, manage, and track invoices.<br/><br/> It is built on the MERN stack, which is a popular combination of JavaScript technologies that includes MongoDB, Express, React, and Node.js.<br/>
      <br/>You can &nbsp;➕ Add &nbsp; ⛔ Delete &nbsp; 🖋️ Update &nbsp;the
       Invoice Card while logged in to the application. <br/><br/>All the data including, User👤 Sign In / Sing Up to perform crud operations will be stored in MongoDB Server, Here's the sample of Invoice Card..</p>
       <img src={invoice_card} style={{width:"290px",height:"155px",margin:"auto"}}/>
       </div>
       
  <Fotter/>
    </div>
  )
}

export default About
