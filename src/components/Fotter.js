
import quora from './uploads/quora-removebg-preview.png';
import linkedin from './uploads/linkedinIcon.png';
import git from './uploads/GitHub-Mark-64px.png';
const Fotter = () => {
  return (
    <footer style={{marginTop:"50px"}}>
    <a href='https://www.linkedin.com/in/ayush-agarwal52/' target='_blank'><img width={"23px"} src={linkedin}/></a> &nbsp;&nbsp;
    <a href='https://www.quora.com/profile/Ayush-Agarwal-1154' target='_blank'><img width="33px" src={quora}/></a>&nbsp;&nbsp;
    <a href='https://github.com/agarwalayush9' target='_blank'><img width="30px" src={git}/></a>&nbsp;&nbsp;
    <a href='mailto:ayushag.cse@gmail.com' style={{textDecoration:"none" ,fontSize:"25px"}} target='_blank'>📧</a>
    <br/><br/>
     <span> Created By - Ayush Agarwal 
      &nbsp; &copy; {new Date().getFullYear()}</span>
     </footer>
  )
}

export default Fotter
