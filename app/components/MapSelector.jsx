import * as React from "react";
import { Map } from "./Map";
import { parseAddress } from "./Autocomplete";

function geocodeLatLng(
  lat,
  lng,
  geocoder,
  map,
  infowindow,
  markerOnSelectedAddress,
  setMapSelectedAddressInfo
) {
  const latlng = {
    lat,
    lng,
  };

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        const result = response.results[0];

        if (result.geometry?.location) {
          markerOnSelectedAddress.setMap(null);

          markerOnSelectedAddress.setOptions({
            title: result.formatted_address,
            position: result.geometry.location,
            map,
          });

          infowindow.setContent(result.formatted_address);
          infowindow.open(map, markerOnSelectedAddress);

          if (setMapSelectedAddressInfo) {
            const info = parseAddress(result);
            if (info) {
              setMapSelectedAddressInfo(info);
            } else {
              console.log("GeocoderResult could not be parsed", result);
            }
          }
        }
      } else {
        console.log("Geocoder query without results", { location: latlng });
      }
    })
    .catch((e) => window.alert(`Geocoder failed due to: ${e}`));
}

export function MapAddressSelector(props) {
  const {
    mapObjRef,
    searchBoxObjRef,
    markerOnSelectedAddress,
    infoWindowOnSelectedAddress,
    setMapSelectedAddressInfo,
    initialZoom,
    initialCenter,
  } = props;

  const [geocoder, setGeocoder] = React.useState();
  const [marker, setMarker] = React.useState();
  const [infowindow, setInfowindow] = React.useState();

  const [internalZoom, setInternalZoom] = React.useState(initialZoom ?? 3);
  const [center, setCenter] = React.useState(
    initialCenter ?? {
      lat: 37.09024,
      lng: -95.712891,
    }
  );

  React.useEffect(() => {
    if (!geocoder) {
      // eslint-disable-next-line no-undef
      setGeocoder(new google.maps.Geocoder());
    }
  }, [geocoder]);

  React.useEffect(() => {
    if (!marker) {
      // eslint-disable-next-line no-undef
      const m = new google.maps.Marker();
      setMarker(m);
      if (markerOnSelectedAddress) {
        markerOnSelectedAddress.current = m;
      }
    }
  }, [marker, markerOnSelectedAddress]);

  React.useEffect(() => {
    if (!infowindow) {
      // eslint-disable-next-line no-undef
      const m = new google.maps.InfoWindow();
      setInfowindow(m);
      if (infoWindowOnSelectedAddress) {
        infoWindowOnSelectedAddress.current = m;
      }
    }
  }, [infowindow, infoWindowOnSelectedAddress]);

  const onClick = (e) => {
    if (geocoder && infowindow && marker && e.latLng && mapObjRef?.current) {
      geocodeLatLng(
        e.latLng.lat(),
        e.latLng.lng(),
        geocoder,
        mapObjRef?.current,
        infowindow,
        marker,
        setMapSelectedAddressInfo
      );
    }
  };

  const onIdle = (m) => {
    if (!initialZoom) setInternalZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  return (
    <div className="flex h-full flex-col">
      <Map
        center={center}
        onClick={onClick}
        onIdle={onIdle}
        zoom={internalZoom}
        className="h-full"
        mapObjRef={mapObjRef}
        searchBoxObjRef={searchBoxObjRef}
      />
    </div>
  );
}
