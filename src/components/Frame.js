import React, { useContext, useEffect } from "react";
import invoiceContext from "../context/invoice/invoiceContext";
import FrameItem from "./FrameItem";
import { useNavigate } from "react-router-dom";

const Frame = (props) => {
  const navigate = useNavigate();

  const context = useContext(invoiceContext);
  const { invoice, getInvoice } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getInvoice();
    }
    else{
      // console.log("login")
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateInvoice = (currentI) => {
    navigate("/Update",{state:{currentI}});
    // console.log(currentI);
  };

  return (
    <div className="listElements">
      
      {invoice.length===0 && <div className="content" ><label> List is Empty...</label></div>}
      {invoice.map((list, i) => {
        return (
          <FrameItem
            showAlert={props.showAlert}
            key={list._id}
            updateInvoice={updateInvoice}
            list={list}
          />
        );
      })}
    </div>
  );
};

export default Frame;
