export const Activities = () => {
  const activities = [
    {
      title: "First slide label 1",
      description:
        "Some representative placeholder content for the first slide.",
      image: "src/images/background.jpg",
    },
    {
      title: "First slide label 2",
      description:
        "Some representative placeholder content for the first slide.",
      image: "src/images/background.jpg",
    },
    {
      title: "First slide label 3",
      description:
        "Some representative placeholder content for the first slide.",
      image: "src/images/background.jpg",
    },
    {
      title: "First slide label 4",
      description:
        "Some representative placeholder content for the first slide.",
      image: "src/images/background.jpg",
    },
  ];
  return (
    <div id="activities" className="container-fluid pt-3">
      <h2 className="text-center text-success pt-5">Nuestras experiencias</h2>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {activities.map((activitie, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 && "true"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}

          {/* <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button> */}
        </div>
        <div className="carousel-inner">
          {activities.map((activitie, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 && "active"}`}
            >
              <img src={activitie.image} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{activitie.title}</h5>
                <p>{activitie.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
