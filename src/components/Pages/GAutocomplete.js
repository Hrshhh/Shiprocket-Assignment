import React, {useState} from 'react';
import '../style/style.css';

const items = {
  "--SELECT AREA--": -1,
  'Albania': 0, 'Algeria': 1, 'Angola': 2, 'Argentina': 3, 'Armenia': 4, 'Australia': 5, 'Austria': 6, 'Azerbaijan': 7, 'Bahamas': 8, 'Bahrain': 9, 'Bangladesh': 10, 'Belarus': 11, 'Belgium': 12, 'Botswana': 13, 'Brazil': 14, 'Bulgaria': 15, 'Burkina Faso': 16, 'Burundi': 17, 'Cameroon': 18, 'Canada': 19, 'Central African Republic': 20, 'Chile': 21, 'Colombia': 22, 'Croatia': 23, 'Denmark': 24, 'Dominican Republic': 25, 'Ecuador': 26, 'Egypt': 27, 'El Salvador': 28, 'Eritrea': 29, 'Estonia': 30, 'Finland': 31, 'France': 32, 'Germany': 33, 'Ghana': 34, 'Greece': 35, 'Guatemala': 36, 'Guinea': 37, 'Guyana': 38, 'Haiti': 39, 'Honduras': 40, 'Hungary': 41, 'India': 42, 'Indonesia': 43, 'Iraq': 44, 'Ireland': 45, 'Italy': 46, 'Jamaica': 47, 'Japan': 48, 'Kazakhstan': 49, 'Kenya': 50, 'Latvia': 51, 'Lebanon': 52, 'Lesotho': 53, 'Libya': 54, 'Lithuania': 55, 'Madagascar': 56, 'Malawi': 57, 'Malaysia': 58, 'Mali': 59, 'Mauritania': 60, 'Mauritius': 61, 'Mexico': 62, 'Montenegro': 63, 'Morocco': 64, 'Mozambique': 65, 'Namibia': 66, 'Nepal': 67, 'Netherlands': 68, 'New Zealand': 69, 'Nicaragua': 70, 'Niger': 71, 'Norway': 72, 'Pakistan': 73, 'Papua New Guinea': 74, 'Peru': 75, 'Poland': 76, 'Portugal': 77, 'Qatar': 78, 'Romania': 79, 'Rwanda': 80, 'Saudi Arabia': 81, 'Senegal': 82, 'Slovenia': 83, 'South Africa': 84, 'Spain': 85, 'Sri Lanka': 86, 'Sudan': 87, 'Suriname': 88, 'Sweden': 89, 'Switzerland': 90, 'Tajikistan': 91, 'Thailand': 92, 'Tunisia': 93, 'Turkey': 94, 'Uganda': 95, 'Ukraine': 96, 'United Kingdom': 97, 'Uruguay': 98, 'Zambia': 99, 'Zimbabwe': 100
}

const GAutocomplete = () => {
  const [area, setArea] = useState(null)

  const onHandleChange = (e) => {
    setArea(e.target.value);
  }

    
  return (
    <>
      <div className='area-container'>
        <div className='area-control'>
            <label>Area- </label>
            <select 
              value={area} 
              onChange={onHandleChange}
            >
                {Object.entries(items).map((key) => (
                <option key={key[0]} value={key[0]}>
                    {key[0]}
                </option>
                ))}
            </select>
        </div>
        
        {area ? (area === "--SELECT AREA--" ? null : <h3>Selected Area is {area}</h3>) : null }
      </div>
          

        

        
    </>
  )
}

export default GAutocomplete