import * as React from "react";

// copy inner ref to forwarded ref https://stackoverflow.com/a/73748435
const useForwardRef = (ref, initialValue = null) => {
  const targetRef = React.useRef(initialValue);

  React.useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

const getAddressComponent = (
  addressComponents, //: google.maps.GeocoderAddressComponent[],
  type //: string
) => {
  return addressComponents.find((v) => v.types.includes(type));
};

const parseAddress = (place) => {
  const isRoute = place.types?.includes("street_address");
  const isAddress = place.types?.includes("route");
  const isPremise = place.types?.includes("premise");
  const isParseable = isRoute || isAddress || isPremise;

  // console.log(isRoute, isAddress);

  const type = isRoute
    ? "route"
    : isAddress
    ? "street_address"
    : isPremise
    ? "premise"
    : "none";

  if (isParseable && place.address_components) {
    const streetNumber =
      getAddressComponent(place.address_components, "street_number")
        ?.long_name ?? "";
    const route =
      getAddressComponent(place.address_components, "route")?.long_name ?? "";
    const street = `${streetNumber} ${route}`;

    const info = {
      lat: place.geometry?.location?.lat() ?? 0,
      lng: place.geometry?.location?.lng() ?? 0,
      country:
        getAddressComponent(place.address_components, "country")?.short_name ??
        "",
      address: street.trim(),
      city:
        getAddressComponent(place.address_components, "locality")?.long_name ??
        "",
      state:
        getAddressComponent(
          place.address_components,
          "administrative_area_level_1"
        )?.long_name ?? "",
      zip:
        getAddressComponent(place.address_components, "postal_code")
          ?.long_name ?? "",
      type,
    };

    return info;
  }

  return null;
};

const AutocompleteSearchInput = React.forwardRef(
  function InnerAutocompleteSearchInput(props, ref) {
    const {
      className, //
      setMapSelectedAddressInfo,
      markerObjRef,
      infoWindowObjRef,
      searchBoxObjRef,
      mapObjRef,
      pickAddress = false,
      ...rest
    } = props;
    const [searchBox, setSearchBox] = React.useState();
    const myRef = useForwardRef(ref);
    const onSearchPlaceSelected = (searchBox, bounds, mapObjRef) => {
      const places = searchBox.getPlaces();

      markerObjRef?.current?.setMap(null);

      places?.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        // console.log(place);

        const info = parseAddress(place);
        if (info) setMapSelectedAddressInfo(info);
        else console.log("PlaceResult could not be parsed", place);

        markerObjRef?.current?.setOptions({
          //icon,
          title: place.name,
          position: place.geometry.location,
          map: mapObjRef?.current,
        });

        infoWindowObjRef?.current?.setContent(place.name);

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
    };

    React.useEffect(() => {
      if (myRef && myRef.current && !searchBox) {
        // eslint-disable-next-line no-undef
        const searchBoxObj = new google.maps.places.SearchBox(
          myRef.current,
          {}
        );
        setSearchBox(searchBoxObj);
        if (searchBoxObjRef) searchBoxObjRef.current = searchBoxObj;
      }
    }, [myRef, searchBox, searchBoxObjRef]);

    React.useEffect(() => {
      if (searchBox) {
        ["places_changed"].forEach((eventName) =>
          // eslint-disable-next-line no-undef
          google.maps.event.clearListeners(searchBox, eventName)
        );

        if (onSearchPlaceSelected) {
          // eslint-disable-next-line no-undef
          const bounds = new google.maps.LatLngBounds();

          searchBox.addListener("places_changed", () => {
            onSearchPlaceSelected(searchBox, bounds, mapObjRef);

            if (mapObjRef?.current) {
              mapObjRef.current.fitBounds(bounds);
            }
          });
        }
      }
    }, [searchBox, onSearchPlaceSelected, mapObjRef]);

    return (
      <input
        type="text"
        ref={myRef}
        placeholder="123 Washington Avenue"
        className={className}
        {...rest}
        // iconElement={
        //   pickAddress ? (
        //     <div className="text-error">Can't find this address on a map</div>
        //   ) : null
        // }
      />
    );
  }
);

AutocompleteSearchInput.displayName = "AutocompleteSearchInput";

export { AutocompleteSearchInput, parseAddress };
