import "./userprofile.css";

export default function Userprofile() {
  return (
    <div className="newCustomer">
      <h1 className="newCustomerTitle">Customer Details</h1>
      <form className="newCustomerForm">
        <div className="newCustomerItem">
          <label>Customer Name</label>
          <input type="text" placeholder="arjun" />
        </div>
         <div className="newCustomerItem">
          <label>Phone Number</label>
          <input type="text" placeholder="91" />
        </div>
        <div className="newCustomerItem">
          <label>Location</label>
          <input type="text" placeholder="Nagpur " />
        </div>
        <div className="newCustomerItem">
          <label>Service Name</label>
          <input type="name" placeholder="Exterior Wash" />
        </div>
        <div className="newCustomerItem">
          <label>Date</label>
          <input type="text" placeholder="20/05/2022" />
        </div>
       
        <div className="newCustomerItem">
          <label>Time</label>
          <input type="text" placeholder="10.45pm" />
        </div>
        <div className="newCustomerItem">
          <label>Status</label>
          <input type="text" placeholder="Paid" />
        </div>
        <div className="newCustomerItem">
          <label>Ammount</label>
          <input type="text" placeholder="500/-" />
        </div>
        <div className="newCustomerItem">
          <label>Notes</label>
          <input type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}