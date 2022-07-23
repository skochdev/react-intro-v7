import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <>
      {pets.length > 0 ? (
        <ul>
          {pets.map(({ name, breed, animal, id, images, city, state }) => (
            <Pet
              key={id}
              name={name}
              breed={breed}
              animal={animal}
              images={images}
              location={`${city}, ${state}`}
              id={id}
            />
          ))}
        </ul>
      ) : (
        <h2>No pets were found</h2>
      )}
    </>
  );
};

export default Results;
