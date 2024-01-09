
import GoogleMapReact from 'google-map-react';

import { useParams } from 'next/navigation';

const tourPlaces = {
  "38": {
      "location" : {
          lat: 21.288302660697095,
          lng: 40.434399406205294
        }
  },
  "36": {
    "location" : {
        lat: 21.54338648338733,
        lng: 39.142146180373985
      }
},
"34": {
  "location" : {
    lat: 21.288302660697095,
    lng: 40.434399406205294
  }
},
"32": {
  "location" : {
      lat: 21.54338648338733,
      lng: 39.142146180373985
    }
},
"10": {
  "location" : {
      lat: 21.432099860245206,
      lng: 39.81082030317928
    }
},
"9": {
  "location" : {
      lat: 21.432099860245206,
      lng: 39.81082030317928
    }
},
"1": {
  "location" : {
      lat: 21.432099860245206,
      lng: 39.81082030317928
    }
},

}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({children, ...props}){
  const params = useParams();
  
  const defaultProps = {
    center: params?.slug ? tourPlaces[params?.slug]?.location  : tourPlaces["1"]?.location,
    zoom: 11
  };
 
  return (
    <div style={{ height: '96vh', width: '100%' }}>
      <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyC0TXPj6mGQhHldhYkkhI8x960kMrowxgg" }}
         defaultCenter={defaultProps.center}
         defaultZoom={defaultProps.zoom}
         yesIWantToUseGoogleMapApiInternals
        {...props}
      >
        {children}
      </GoogleMapReact>
      
    </div>
  );
}