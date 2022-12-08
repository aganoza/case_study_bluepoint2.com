import * as React from "react";
import { createCustomEqual } from "fast-equals";

const Map = (props) => {
  const {
    onClick,
    onIdle,
    children,
    className,
    mapObjRef,
    searchBoxObjRef,
    ...options
  } = props;
  const mapRef = React.useRef(null);

  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (mapRef.current && !map) {
      // eslint-disable-next-line no-undef
      const mapObj = new google.maps.Map(mapRef.current, {});
      setMap(mapObj);
      if (mapObjRef) mapObjRef.current = mapObj;
    }
  }, [mapRef, map, mapObjRef]);

  // https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle", "bounds_changed"].forEach((eventName) =>
        // eslint-disable-next-line no-undef
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }

      map.addListener("bounds_changed", () => {
        if (searchBoxObjRef?.current) {
          searchBoxObjRef.current.setBounds(map.getBounds());
        }
      });
    }
  }, [map, onClick, onIdle, searchBoxObjRef]);

  return (
    <>
      <div ref={mapRef} className={className} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // This injects the map prop on the <Marker /> childrens to fill the required MarkerOptions
          // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (
    // eslint-disable-next-line no-undef
    a instanceof google.maps.LatLng ||
    // eslint-disable-next-line no-undef
    b instanceof google.maps.LatLng
  ) {
    // eslint-disable-next-line no-undef
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }

  return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export { Map };
