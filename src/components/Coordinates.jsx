import useFetch from './useFetch';

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const Coordinates = () => {
  const { data, loading } = useFetch(apiUrl);
  console.log('🚀 ~ file: Coordinates.jsx:7 ~ Coordinates ~ data:', data);

  const handleNewDoggy = () => {
    window.location.reload();
  };

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <button onClick={handleNewDoggy}>New doggy</button>
          <img src={data.message} alt='' />
          {/*      <p>Latitude: {data.iss_position.latitude}</p>
    <p>Longitude: {data.iss_position.longitude}</p> */}
        </div>
      )}
    </div>
  );
};

export default Coordinates;
