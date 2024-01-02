import { itenaryPlaces } from "@/data/mapData";
import { useSelector } from "react-redux";

// examples:
import SimpleMap from './SimpleMap';

const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span><span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.types[0]}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${'$'.repeat(place.price_level)}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.opening_hours.open_now ? 'Open' : 'Closed'}
      </div>
    </div>`;

// Refer to https://github.com/google-map-react/google-map-react#use-google-maps-api
const handleApiLoaded = (map, maps, places) => {
    
  const markers = [];
  const infowindows = [];

  places.forEach((place) => {
    markers.push(new maps.Marker({
      position: {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      },
      map,
      
    }));

    infowindows.push(new maps.InfoWindow({
      content: getInfoWindowString(place),
    }));
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
    });
    
  });
};

const MarkerInfoWindow = () => {
    const {itenarayItems} = useSelector(state => state.tour);

    const places = itenarayItems?.map((item) => ({
        geometry: {
          location: itenaryPlaces[item?.title],
        },
        id: item?.id,
        name: item?.title,
        opening_hours: {
          open_now: false,
        },
        price_level: 2,
        rating: 4.6,
        types: ["restaurant", "food", "point_of_interest", "establishment"]
      }))

    return (
      <>
        {places?.length > 0 && (
          <SimpleMap
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
          />
        )}
      </>
    );
}

export default MarkerInfoWindow;