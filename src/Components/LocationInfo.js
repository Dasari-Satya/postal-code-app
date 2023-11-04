import React from 'react';

const LocationInfo = ({ locationData, loading, error, onClear }) => {
  if (loading) {
    return <div align="center" id="load">Loading...</div>;
  }

  if (error) {
    return <div align="center" id="error">Error: {error.message}</div>;
  }

  if (locationData) {
    const places = locationData.places.map((place, index) => (
      <div key={index} align="center" class="info card row" cssstyle="width: 10rem;">
        <div class="col-lg-14">
          <div>
            <strong>Place Name:</strong> <span class="data">{place['place name']}</span>
          </div>
          <div>
            <strong>State Abbreviation:</strong> <span class="data">{place['state abbreviation']}</span>
          </div>
          <div>
            <strong>Country:</strong>  <span class="data">{locationData.country} ({locationData['country abbreviation']})</span>
          </div>
          <div>
            <strong>Latitude:</strong>  <span class="data">{place.latitude}</span>
          </div>
          <div>
            <strong>Longitude:</strong>  <span class="data">{place.longitude}</span>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <button onClick={onClear} className='btn btn-warning'>Clear Data</button>
        {places}
      </div>
    );
  }

  return null;
};

export default LocationInfo;
