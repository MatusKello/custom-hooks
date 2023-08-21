import useFetch from './useFetch';

const apiUrl = 'http://api.open-notify.org/iss-now.json';

const Coordinates = () => {
  const { coordinates, loading } = useFetch(apiUrl);
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <p>Latitude: {coordinates.iss_position.latitude}</p>
          <p>Longitude: {coordinates.iss_position.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Coordinates;
