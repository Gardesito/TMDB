import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [mensaje, setMensaje] = useState(false);
  //mensaje es igual a false

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iiuhrpn",
        "template_f2jcubd",
        form.current,
        "MMwnwlr83kq5gLBuq"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMensaje(true); // cambio el estado a true , porque se envio el msj
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section>
        <h2>Contactame</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" onSubmit={sendEmail} />
        </form>
        {mensaje && <p>Se a enviado su msj</p>}
      </section>
    </>
  );
};

export default Contact;
