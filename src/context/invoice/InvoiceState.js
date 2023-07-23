import { useState } from "react";
import InvoiceContext from "./invoiceContext";

const InvoiceState =(props)=>{
    const host = "https://ibox-api.vercel.app"
    const invoiceList= []
      const [invoice,setInvoice] = useState(invoiceList)
    
      // Get frames
      const getInvoice = async ()=>{
         //API Call
         const response = await fetch(`${host}/api/invoice/fetchEntries`,{
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
            "authToken":localStorage.getItem('token'),
          }
        });
        const json = await response.json()
        setInvoice(json)
      }
      // Add a frame
      const addInvoice = async (title,description,tag)=>{
        // Make api call
         //API Call
        //  console.log(file)
         const response = await fetch(`${host}/api/invoice/addInvoice`,{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
            "authToken":localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag})
        });
       const invoiceI = await response.json();
        setInvoice(invoice.concat(invoiceI))
      }

      // Delete a frame
      const delInvoice = async(id)=>{
        // API Call
        const response = await fetch(`${host}/api/invoice/deleteInvoice/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-Type':'application/json',
            "authToken":localStorage.getItem('token')
          },
        });
        const json= response.json();
        // console.log(json);
        const newInvoice=invoice.filter((invoiceI)=>{ return invoiceI._id!=id}) 
        setInvoice(newInvoice)
      }
      // edit a frame
      const editInvoice = async (id,title,description,tag)=>{
        //API Call
        const response = await fetch(`${host}/api/invoice/updateInvoice/${id}`,{
          method: 'PUT',
          headers:{
            'Content-Type':'application/json',
            "authToken":localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag})
        });
        const json= await response.json();

        let newInvoice= JSON.parse(JSON.stringify(invoice))
        // Logic to edit in client
        for (let index = 0; index < newInvoice.length; index++) {
          const e = newInvoice[index];
          if(e._id === id){
            newInvoice[index].title =title;
            newInvoice[index].description =description;
            newInvoice[index].tag =tag;
            break;
          }
        }
        setInvoice(newInvoice);
      }
      return(
        <InvoiceContext.Provider value={{invoice,addInvoice,delInvoice,editInvoice,getInvoice}}>
            {props.children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceState;