import React,{useContext, useRef} from "react";
import moment from "moment/moment";
import "font-awesome/css/font-awesome.min.css";
import invoiceContext from "../context/invoice/invoiceContext";
import img from "./uploads/default_box.png"

const FrameItem = (props) => {
  const delIn= useRef(null);
  const itemW= useRef(null);
  const { list,updateInvoice } = props;
  const context = useContext(invoiceContext);
  const { delInvoice } = context;

  const del=()=>{
    if(document.getElementById("item")){
      let widthC= itemW.current.offsetWidth -50;
      let heightC= itemW.current.offsetHeight -50;
      delIn.current.style.display="block";
      delIn.current.style.width=widthC + "px";
      delIn.current.style.height=heightC + "px";
    }
  }
  const vis=()=>{
    delIn.current.style.display="none";
  }
  return (
    <div id="item" ref={itemW}>
      <small className="date">{moment(list.date).format("LL")}</small>
      <i onClick={() => del()}
        className="fa fa-trash-o del"
        style={{ color: "red", fontSize: "21px" }}
      ></i>

      <br />
      <img
        alt="Pdf/png"
        id="im"
        src={img}
        style={{ width: "80px", height: "100px" }}
      />
      <div id="frameBody">
        <small style={{ fontFamily: "monospace" }}>
          <i className="fa fa-tag" style={{ color: "#f06b6b" }}></i>&nbsp;
          {list.tag}
        </small>
        <br />
        <div id="frameB">
          <span style={{ lineHeight: "25px" }}>
            <small>Title:</small> {list.title}
          </span>
          <br />
          <span>
            <small>Detail:</small> {list.description}
          </span>
        </div>
      </div>
      <i
        onClick={()=>{updateInvoice(list)}}
        className="fa ed fa-edit"
        style={{
          fontSize: "25px",
          color: "#f9ad4b",
          fontFamily: " FontAwesome",
        }}
      ></i>
      {/* Delete Confirmation/alert message */}
      <div className="deleteItem" ref={delIn} id={"delF"}>
        <span style={{border:"2px solid crimson",borderRadius:"50%", padding:"10px"}}>❌</span><br></br><br></br>
        <span>Are you sure? </span><br></br>
        <small>You want to delete this Invoice</small><br></br><br></br>
        <button onClick={()=>{delInvoice(list._id); props.showAlert("success","Invoice Deleted Successfully");}} className="y">Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>vis()} className="n">No</button>
      </div>
    </div>
  );
};

export default FrameItem;
