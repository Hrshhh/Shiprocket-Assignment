import React, {useState} from 'react';
import { toast } from 'react-toastify';
import "../style/style.css";

function Distance() {
    const [values, setValues]= useState({
        start_city: "",
        end_city: "",
        middleStop_city: ""
    })
    const [costCalculated, SetCost] = useState(0);

    const {start_city, end_city, middleStop_city} = values;

    const handleChange = (e) => {
        // console.log(e.target.name);
        setValues({...values, [e.target.name]: e.target.value})
    }

    const distanceCalc = (start, end, middleStop = null) => {
        const cities = {
            Mumbai: { x: 1, y: 5 },
            Kolkata: { x: 7, y: 2 },
            Chennai: { x: 6, y: 5 },
            Bangalore: { x: 4, y: 9 }
        };

        const start_location = cities[start];
        const end_location = cities[end];

        let distance = Math.sqrt((Math.pow(end_location.x - start_location.x, 2)) + (Math.pow(end_location.y - start_location.y, 2)))

        if(middleStop) {
            const middleCoords = cities[middleStop];

            distance = Math.sqrt((Math.pow(middleCoords.x - start_location.x, 2))+ (Math.pow(middleCoords.y - start_location.y, 2)));

            distance += Math.sqrt((Math.pow(end_location.x - middleCoords.x, 2))+ (Math.pow(end_location.y - middleCoords.y, 2)));
        }

        

        return distance*1000;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Start City ", start_city);
        // console.log("End City ", end_city);
        // console.log("Middle City ", middleStop_city);
        try{
            if(!start_city && !end_city){
                toast.error("Enter Start and End City");
            }
            else if((start_city === middleStop_city) && (middleStop_city === end_city)){
                toast.error("Start and End City should not be same");
            }
            else if(((start_city === end_city) && !middleStop_city)){
                toast.error("Start and End City should not be same");
            }
            
            else if(!start_city){
                toast.error("Enter Start City");
            }
            else if(!end_city){
                toast.error("Enter End City");
            }
            
            let ans = distanceCalc(start_city, end_city, middleStop_city);
            const string_ans = ans.toFixed(2);
            // console.log("Total Paise to cover the distance will be Rs",parseFloat(string_ans));
            SetCost(parseFloat(string_ans));
        }
        catch(err){
            console.error("Err occured ", err);
        }
        
    }


  return (
    <div className='dist'>
    <div className='page-container'>
      <div className="title-container">
        <h3 className="title">Distance Calculator</h3>
      </div>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                
                <div className='dist-container'>
                    <label>Start City:-</label>
                    <select name='start_city' className='dist-control' onChange={handleChange}>
                        <option value="">--SELECT--</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option> 
                    </select>
                </div>
                <div className='dist-container'>
                    <label>Mid City(Optional):-</label>
                    <select name='middleStop_city' className='dist-control' onChange={handleChange}>
                        <option value="">--SELECT--</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option> 
                    </select>
                </div>
                <div className='dist-container'>
                    <label>End City:-</label>
                    <select name='end_city' className='dist-control' onChange={handleChange}>
                        <option value="">--SELECT--</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option> 
                    </select>
                </div>
                
                
                <button className="submit-button" type="submit">Calculate Distance</button>
                
            </form>
            
        </div>
    </div>
    {costCalculated && (
        <h2 style={{marginLeft: "400px"}}>Total Cost to cover the distance will be {costCalculated} paise</h2>
    )}
        
    </div>
  )
}

export default Distance;