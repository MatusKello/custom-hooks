import useFetch from './useFetch';

const apiUrl = 'http://api.open-notify.org/iss-now.json';

const Coordinates = () => {
  const { data, loading } = useFetch(apiUrl);
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <p>Latitude: {data.iss_position.latitude}</p>
          <p>Longitude: {data.iss_position.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Coordinates;
