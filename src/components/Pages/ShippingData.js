import React, {useState, useEffect} from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const data = [
  {
    shipperId:"borzo",
    rating:4,
    availableCities: [
        "mumbai ",
        "mangalore ",
        "chennai "
    ]
  },
  {
    shipperId:"wefast",
    rating:4.5,
    availableCities: [
        "mumbai ",
        "vizag ",
        "chennai "
    ]
  },
  {
    shipperId:"dunzo",
    rating:4.1,
    availableCities: [
        "vizag ",
        "bangalore ",
        "chennai "
    ]
  }
]

const columns= [{
  Header: 'Shipper Id',
  accessor: 'shipperId'
},{
  Header: 'Rating',
  accessor: 'rating'
},
{
  Header: 'Available Cities',
  accessor: 'availableCities'
},

]

const ShippingData = () => {
  const [city, selectedCity] = useState("");
  const [shippers, setShippers] = useState([]);

  useEffect(() => {
    const filShippers = data.filter((ship) => ship.availableCities.includes(city));
    setShippers(filShippers);
  }, [city])

  const handleCity = (e) => {
    selectedCity(e.target.value);
  }
  return (
    <div className='ship'>
      <div className="title-container">
        <h3 className="title">Shipping Data</h3>
      </div>
      <div className='ship-container'>
        <div className='ship-control'>
          <label>Select City:-</label>
          <select className=''onChange={handleCity}>
            <option value="All">--SELECT--</option>
            <option value="mumbai ">Mumbai</option>
            <option value="vizag ">Vizag</option>
            <option value="bangalore ">Bangalore</option>
            <option value="chennai ">Chennai</option>
          </select>
        </div>
      </div>
      
      
      <ReactTable  
        data={shippers}  
        columns={columns}
        pageSizeOptions = {[3]} 
        defaultPageSize = {3}
        defaultSorted ={[
          {
            id: "rating",
            desc: false
          }
        ]}
        filterable
      />  
      
    </div> 
  )
}

export default ShippingData;


