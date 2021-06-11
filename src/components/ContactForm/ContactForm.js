import React from "react";
import emailjs from "emailjs-com";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import styles from "./ContactForm.module.scss";
import Title from "./../Title/Title";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "tablebook",
        "template_4wjrc4g",
        e.target,
        "user_NdKIjOTJG11UTuJIbID06"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form className={styles.wrapper} onSubmit={sendEmail} autoComplete="off">
      <Title>napisz do nas!</Title>
      <Input name="subject" label="temat" />
      <Input name="user_name" label="Imię i Nazwisko" />
      <Input name="user_email" label="Email" />
      <Input name="message" label="Wiadomość" tag="textarea" />
      <Button>Wyślij</Button>
    </form>
  );
};

export default ContactForm;
