export const Home = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url("src/images/bg-cueva.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
      }}
      className="d-flex flex-column text-center text-white justify-content-center align-items-center gap-5"
    >
      <h1>Cancha Cuevita</h1>
      <span
        style={{
          borderRadius: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "10px",
        }}
      >
        Reservas al: <b>927898120</b>
      </span>
    </div>
  );
};
