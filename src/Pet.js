import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, location, id, images }) => {
  let heroImg = "http://pet-images.dev-apis.com/pets/none.jpg";

  if (images) {
    heroImg = images[0];
  }
  return (
    <li>
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={heroImg} alt={name} loading="lazy" />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    </li>
  );
};

export default Pet;
