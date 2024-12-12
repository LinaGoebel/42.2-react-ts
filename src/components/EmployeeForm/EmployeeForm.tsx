import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormWrapper, InputsContainer } from "./styles";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const shema = Yup.object().shape({
    name: Yup.string()
      .required("Имя обязательно")
      .test(
        "Имя должно содержать минимум 2 символа",
        "Минимум 2 символа",
        (value) => value.length >= 2
      )
      .test(
        "Имя не может превышать 50 символов",
        "Максимум 50 символов",
        (value) => value.length <= 50
      ),

    lastName: Yup.string()
      .required("Фамилия обязательна")
      .test(
        "Фамилия не может превышать 15 символов",
        "Максимум 15 символов",
        (value) => value.length <= 15
      ),

    age: Yup.number()
      .notRequired()
      .min(18, "Минимальный возраст 18")
      .max(80, "Максимальный возраст 80"),

    position: Yup.string()
      .required("Должность обязательна")
      .test(
        "Должность не может превышать 30 символов",
        "Максимум 30 символов",
        (value) => value.length <= 30
      ),
    termsOfUse: Yup.boolean().oneOf([false]),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: null,
      position: "",
      termsOfUse: false,
    } as EmployeeFormValues,
    validationSchema: shema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Форма отправлена с данными:", values);
    },
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name="name"
          label="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          name="lastName"
          label="Фамилия"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.errors.lastName}
        />
        <Input
          name="age"
          label="Возраст"
          value={formik.values.age || ""}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />
        <Input
          name="position"
          label="Должность"
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.errors.position}
        />
        <label>
          <input
            type="checkbox"
            name="termsOfUse"
            checked={formik.values.termsOfUse}
            onChange={formik.handleChange}
          />
          Правила использования
        </label>
      </InputsContainer>
      <Button name="Создать" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
