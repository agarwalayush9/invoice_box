import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import invoiceContext from "../context/invoice/invoiceContext";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import "font-awesome/css/font-awesome.min.css";

const fileTypes = ["JPG","JPEG", "PNG", ".pdf"];
function New(props) {
  const navigate = useNavigate();
  const context = useContext(invoiceContext);
  const { addInvoice } = context;
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  // console.log(file)
  const [invoice, setInvoice] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addInvoice(invoice.title, invoice.description, invoice.tag,file);
    setInvoice({title:"",description:"",tag:""})
    navigate("/");
    props.showAlert("success","Invoice Added Successfully");
  };
  const onChange = (e) => {
    setInvoice({...invoice, [e.target.name]: e.target.value });
  };
  const onBlur=()=>{
    if(document.querySelector('.content')){
      if(invoice.title.length >5 && invoice.description.length>5){
      let atleast=document.querySelector('.atleast');
        atleast.style.display="none";
      }
    }
  }
 
  return (
    <div className="content" >
      <Link className="back" to="/">
      <i  style={{
          fontSize: "25px",
         
          fontFamily: " FontAwesome",
        }} className="fa fa-arrow-left"></i>
      </Link>
      <span className="invoiceF">Invoice Frame</span>
      <form id="NewFrame">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          onBlur={onBlur}
          id="title"
          name="title"
          value={invoice.title}
          onChange={onChange}
          placeholder="Enter Title.."
        />
        <br/>
        <label style={{lineHeight:"5px"}} htmlFor="description">Description:</label>
        <br />
        <textarea
          onBlur={onBlur}
          onChange={onChange}
          type="text"
          id="description"
          value={invoice.description}
          name="description"
          rows={3}
          cols={25}
          placeholder="Enter Details.."
        />
        <br/>
        
        <label>Tag:</label>
        <input style={{marginBottom:"30px"}}
          type="text"
          name="tag"
          value={invoice.tag}
          onChange={onChange}
          placeholder="Give a tag.."
        />
        <br />
        <label  >Upload Invoice Pdf/image:</label>
       <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        {/* <br /> */}
        <div className="atleast"><small style={{marginTop:"-7px",}}>*Enter atleast 5 characters</small></div>
        <button disabled={invoice.title.length <5 || invoice.description.length<5} style={{float:"right",marginRight:"10px",marginTop:"32px"}} type="submit" onClick={handleClick}>
        Save
        </button>
      </form>
    </div>
  );
}

export default New;
