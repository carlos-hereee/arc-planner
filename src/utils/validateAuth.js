export function validateEmail(value) {
  let error;
  if (!value) {
    error = "*Required Field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "*Invalid email address";
  }
  return error;
}

export function validateEmailOrUsername(value) {
  let error;
  if (!value) {
    error = "*Enter your Email or Username";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "*Invalid email address";
  }
  return error;
}
export function validatePassword(values) {
  let error;
  const passwordRegex = /(?=.*[0-9])/;
  if (!values) {
    error = "*Required Field";
  } else if (values.length < 8) {
    error = "*Password must be 8 characters long.";
  } else if (!passwordRegex.test(values)) {
    error = "*Invalid password. Must contain one number.";
  }
  return error;
}
export function validateUsername(value) {
  let error;
  if (!value) {
    error = "*Required Field";
  } else if (value === "admin") {
    error = "Nice try!";
  }
  return error;
}
export const validateConfirmPassword = (pass, value) => {
  let error = "";
  if (!value) {
    error = "*Required Field";
  }
  if (pass && value) {
    if (pass !== value) {
      error = "Password not matched";
    }
  }

  return error;
};

export function validateField(value) {
  let error;
  if (!value) {
    error = "*Required Field";
  }
  return error;
}
export function validateNumber(value) {
  let error;
  if (!value) {
    error = "*Required Field";
  }
  if (value < 0 || value > 25) {
    error = "*Building Level is 1-25";
  }
  return error;
}
