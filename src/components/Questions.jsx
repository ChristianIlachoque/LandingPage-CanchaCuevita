export const Questions = () => {
  return (
    <div id="questions" className="container pt-3" style={{ height: "900px" }}>
      <h2 className="text-center text-success pt-5">Preguntas Frecuentes</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ background: "#198754" }}
            >
              ¿Cuál es el horario de atención?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              El horario de atención es de <strong>Lunes</strong> a{" "}
              <strong>Domingo</strong> desde las <strong>5:00 am</strong> a{" "}
              <strong>10:00 pm</strong>. Puede hacer sus reservaciones en
              cualquier hora del día marcando al número de teléfono{" "}
              <strong>927898120</strong> o enviar un mensaje al Whatsapp.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              style={{ background: "#198754" }}
            >
              ¿Como reservar la cancha?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Puede realizar sus reservaciones en cualquier momento del día
              llamando al número de teléfono <strong>927898120</strong> o
              enviando un mensaje al Whatsapp. Para confirmar su reservación
              debe especificar la hora y el tiempo que quiere reservar en horas,
              además tiene que especificar que tipo de actividad realizará ({" "}
              <strong>Fútbol, Voleybol</strong> ).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
              style={{ background: "#198754" }}
            >
              ¿Qué pasa si reservo y no voy a jugar?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Nuestros horarios suelen ser muy ajustados algunos días y lo
              recomendable es <strong>asegurarse de su reservación</strong>, en
              caso haga una reservación y no asista se le puede{" "}
              <strong>negar la reserva</strong> en una próxima ocasión.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
              style={{ background: "#198754" }}
            >
              ¿Cómo doy de baja una reserva?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Para evitar conflictos y malentendidos, una vez hecha su reserva
              <strong> tiene al menos unas horas</strong> para poder cancelar en
              caso se tenga imprevistos, o puede considerar también reservar en
              un nuevo horario. <strong>Recuerde</strong> que si no asiste a su
              hora reservada se le colocará en una lista negra y se le puede
              negar una próxima reservación.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
              style={{ background: "#198754" }}
            >
              ¿Se puede reservar la cancha para otra actividad?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Las actividades mas comunes son para <strong>Fútbol</strong> y{" "}
              <strong>Voleybol</strong>. También se permite la reservación para
              otros eventos como campeonatos, reuniones grupales, ensayos,
              entrenamientos.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
              style={{ background: "#198754" }}
            >
              ¿Se dispone de pelotas?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Si, se cuenta con implementos adecuados para la realización de
              deportes como pelotas de Fútbol, Voleybol. Adicionalmente se le
              concede otras indumentarias para poder desarrollar sus actividades
              deportivas.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
              style={{ background: "#198754" }}
            >
              ¿Existe algún beneficio por ser cliente frecuentes?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-success">
              Claro, si sueles ser un cliente frecuente puedes acumular horas y
              reclarmar tu hora extra en horarios de <strong>Lunes</strong> a{" "}
              <strong>Viernes</strong> en horario antes del medio día. Esta
              acumulación estará siendo seguida de forma adecuada para que
              puedas optar por tu hora <strong>gratis</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
