import React from "react";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Password } from "@mui/icons-material";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", contraceña: "", confirmar: "" },

    onSubmit: (data) => {
      console.log(data);
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("aca puedo poner lo que quiera - ERROR")
        .min(5)
        .max(15),
      email: Yup.string().email().required(),
      contraceña: Yup.string()
        .required()
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/),
      confirmar: Yup.string()
        .required()
        .oneOf([Yup.ref("contraceña")]),
    }),

    validateOnChange: false,
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        type="text"
        label="Nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />

      <TextField
        variant="outlined"
        type="text"
        label="Email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />

      <TextField
        variant="outlined"
        type="text"
        label="Contraceña"
        name="contraceña"
        onChange={handleChange}
        error={errors.contraceña ? true : false}
        helperText={errors.contraceña}
      />

      <TextField
        variant="outlined"
        type="text"
        label="Confirmar"
        name="confirmar"
        onChange={handleChange}
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />

      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
