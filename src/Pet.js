const Pet = ({ name, animal, breed, location, id, images }) => {
  let heroImg = "http://pet-images.dev-apis.com/pets/none.jpg";

  if (images) {
    heroImg = images[0];
  }
  return (
    <div>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={heroImg} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Pet;
