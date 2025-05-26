import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import geoJson from '../../constants/world-50m.v1.json';
import { ComposableMap, Geography, Geographies } from 'react-simple-maps';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesMap } from '../../redux/slices/apiSlice';

const SaleMap = () => {
  const state = useSelector((state) => state.apis.salesMapData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);

  // console.log(state);

  const findByCountryId = (countryID) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryID
    );
    return matchedCountry ? matchedCountry.fill_color : '#ececec';
  };

  return (
    <div className="block-wrap mt-[14px] lg:mt-0 sm:ml-0 ml-[14px] lg:w-auto w-full sm:w-[calc(50%-7px)]">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1" // 도법
          projectionConfig={{
            rotate: [0.0, 0.0, 0], // 평면면
            scale: 200,
          }}
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.id !== '010') {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                    />
                  );
                } else {
                  return null;
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SaleMap;
