import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import invoiceContext from "../context/invoice/invoiceContext";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { useLocation } from "react-router-dom";

const fileTypes = ["JPG","JPEG", "PNG", ".pdf"];

function Update(props) {
  const location =useLocation();
  const navigate = useNavigate();
  const context = useContext(invoiceContext);

  const { editInvoice } = context;
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const [invoice, setInvoice] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(()=>{
    let currentIn= location.state.currentI;
    setInvoice({id:currentIn._id, etitle: currentIn.title, edescription: currentIn.description, etag:currentIn.tag});
	}, [])
 
  const handleClick = (e) => {
    e.preventDefault();
    editInvoice(invoice.id,invoice.etitle, invoice.edescription, invoice.etag);
    navigate("/");
    props.showAlert("success","Invoice Updated Successfully");
  };
  const onChange = (e) => {
    setInvoice({...invoice, [e.target.name]: e.target.value });
  };
  return (
    <div className="content" >
      <Link className="back" to="/">
      <i  style={{
          fontSize: "25px",
          
          fontFamily: " FontAwesome",
        }} className="fa fa-arrow-left"></i>
      </Link>
      <span className="invoiceF">Edit Invoice</span>

      <form id="Update">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="etitle"
          name="etitle"
          value={invoice.etitle}
          onChange={onChange}
          placeholder="Enter Title.."
        />
        <br />
        <label style={{lineHeight:"5px"}} htmlFor="description">Description:</label>
        <br />
        <textarea
          onChange={onChange}
          type="text"
          id="edescription"
          value={invoice.edescription}
          name="edescription"
          rows={3}
          cols={25}
          placeholder="Enter Details.."
        />
        <br />
        <label>Tag:</label>
        <input style={{marginBottom:"30px"}}
          type="text"
          name="etag"
          value={invoice.etag}
          onChange={onChange}
          placeholder="Give a tag.."
        />
        <br />
        <label  >Upload Invoice Pdf/image:</label>
       <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        {/* <br /> */}
        <button disabled={invoice.etitle.length <5 || invoice.edescription.length<5} style={{float:"right",marginRight:"10px",marginTop:"32px"}} type="submit" onClick={handleClick}>
        Save
        </button>
      </form>
    </div>
  );
}

export default Update;
