import * as yup from "yup";

export const profileSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    userName: yup.string().required(),
    position: yup.string().required(),
  })
  .required();
