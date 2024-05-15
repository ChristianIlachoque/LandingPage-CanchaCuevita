import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const formService = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = [];
    if (form.name.length === 0) errors.push("Nombre es un dato necesario");
    if (form.email.length === 0) errors.push("Correo es un dato necesario");
    if (form.message.length === 0) errors.push("Mensaje es un dato necesario");

    if (errors.length > 0) {
      let message = "";
      errors.forEach((error) => (message += `${error}\n - `));
      // MESSAGE ALERT ERRORS
      Swal.fire({
        title: "Error al enviar",
        text: message,
        icon: "info",
      });
      return;
    }

    // SEND MESSAGE
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formService.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          Swal.fire({
            title: "Correo enviado",
            text: "Se envió su correo",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            title: "Correo NO enviado",
            text: "No se envió su correo, intentelo mas tarde",
            icon: "error",
          });
        }
      );

    // RESET FORM
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div
      id="contact"
      className="container-fluid d-flex pt-3 justify-content-around align-items-center contact-cuevita"
      style={{ height: "900px", background: "#198754" }}
    >
      <div className="d-flex text-white gap-5 contact-cuevita-info">
        <img
          src="src/images/icon-cc-2.png"
          alt="logo-cancha-cuevita"
          className="logo-cancha-cuevita"
        />
        <div className="text-center">
          <b>Rubén Ilachoque Umasi</b>
          <br />
          <b>Rufina Hanccoccallo Manuelo</b>
          <br />
          <br />
          <div
            className="bg-white text-success p-2"
            style={{ borderRadius: "10px" }}
          >
            <p className="text-center">
              <b>Reserva tu cancha</b>
            </p>
            <p>
              <b>Telefono:</b> <span>927898120</span>
            </p>
            <p>
              <b>Correo:</b> <span>cancha.cuevita@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <form
        ref={formService}
        className="bg-white p-4"
        style={{ borderRadius: "10px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="text-success mb-3">Comunicate con nosotros</h1>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="textHelp"
            placeholder="Escribe tu nombre"
            name="name"
            onChange={handleFormChange}
            value={form.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Escribe tu correo electrónico"
            name="email"
            onChange={handleFormChange}
            value={form.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            rows={5}
            placeholder="Escribe un mensaje"
            name="message"
            onChange={handleFormChange}
            value={form.message}
          ></textarea>
        </div>
        <div className="d-flex">
          <button type="submit" className="btn btn-success ms-auto">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
