'use client'

import { addCurrency } from "@/features/currency/currencySlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const MobileCurrencyMenu = () => {
    const dispatch = useDispatch();
    
  const currencyContent = [
    { id: 400, name: "United States dollar", currency: "USD", symbol: "$" },
    { id: 2, name: "Australian dollar", currency: "AUD", symbol: "$" },
    // { id: 3, name: "Brazilian real", currency: "BRL", symbol: "R$" },
    // { id: 4, name: "Bulgarian lev", currency: "BGN", symbol: "лв." },
    { id: 5, name: "Canadian dollar", currency: "CAD", symbol: "$" },
    // { id: 6, name: "Bangladeshi Taka", currency: "BDT", symbol: "৳" },
    // { id: 7, name: "Azerbaijan Manat", currency: "AZN", symbol: "₼" },
    // { id: 8, name: "Colombia Peso", currency: "COP", symbol: "$" },
    // { id: 9, name: "Oman Rial", currency: "OMR", symbol: "﷼" },
    { id: 10, name: "Euro", currency: "EUR", symbol: "€" },
    // { id: 11, name: "Iran Rial", currency: "IRR", symbol: "﷼" },
    // { id: 12, name: "Japan Yen", currency: "JPY", symbol: "£" },
    { id: 13, name: "Great Britain Pound", currency: "GBP", symbol: "£" },
    // { id: 14, name: "Korea (South) Won", currency: "KRW", symbol: "	₩" },
    { id: 15, name: "Saudi riyal", currency: "SAR", symbol: "ريال" },
    // { id: 16, name: "Liberia Dollar", currency: "LRD", symbol: "$" },
    // { id: 17, name: "Malaysia Ringgit", currency: "MYR", symbol: "$" },
    // { id: 18, name: "Mexico Peso", currency: "MXN", symbol: "$" },
    // { id: 19, name: "Namibia Dollar", currency: "NAD", symbol: "R$" },
    // { id: 20, name: "Nepal Rupee", currency: "NPR", symbol: "Nepal Rupee" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencyContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    dispatch(addCurrency(item));
    // setClick(false);
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const successfulLookup = position => {
        const { latitude, longitude } = position.coords;
        // let latitude = 55;
        // let longitude = -3;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=4c6d199989144fd1b8d3f6adbcf3b9ac`)
          .then(response => response.json())
          .then((data) => setSelectedCurrency({id : 300, name : data?.results[0]?.annotations?.currency?.name, currency: data?.results[0]?.annotations?.currency?.iso_code, symbol : data?.results[0]?.annotations?.currency?.symbol }))
      }    
    
      if(window.navigator.geolocation){
        navigator.geolocation
        .getCurrentPosition(successfulLookup, console.log);
      }
    }
    
  }, []);

  dispatch(addCurrency(selectedCurrency));
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {selectedCurrency.currency}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {
        currencyContent?.map((item) => (<li key={item.id} onClick={() => handleItemClick(item)} className="dropdown-item">{item.currency} {item.symbol}</li>))
    }
  </ul>
</div>
  )
}

export default MobileCurrencyMenu;