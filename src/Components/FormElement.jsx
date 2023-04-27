import { useState } from "react";
import FormNextElement from "./FormNextElement";
function FormElement() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    gender: "",
    language: [],
    date: "",
    country: "",
  });

  const [formError, setFormError] = useState({});

  function Validation(values) {
    let error = {};
    if (values.fullName === "") {
      error.fullName = "Full Name is required";
    }

    if (values.email === "") {
      error.email = "Email is required";
    }
    if (values.gender === "") {
      error.gender = "Gender is required";
    }

    if (values.language.length === 0) {
      error.language = "Atleast one language is required";
    }

    if (values.date === "") {
      error.date = "DOB is required";
    }

    if (values.country === "") {
      error.country = "Please select your country";
    }

    setFormError({ ...error });
    return error;
  }

  function changeHandler(event) {
    if (event.target.name === "language") {
      if (event.target.checked) {
        setFormValues((prev) => {
          return { ...prev, language: [...prev.language, event.target.value] };
        });
      } else {
        let lang = formValues.language.filter(
          (el) => el !== event.target.value
        );
        setFormValues((prev) => {
          return { ...prev, language: lang };
        });
      }
    } else {
      setFormValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    let isValid = Validation(formValues);

    if (Object.values(isValid).length === 0) {
      alert("Form Submitted successfully");
      console.log("Form values are", formValues);
    } else {
      alert("OOPS.. Form registration unsuccessfull");
    }
  }

  return (
    <>
      <h2>Forms I & II</h2>
      <h2>Form Task I using onSubmit</h2>

      <div className="formEl">
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="">FullName: </label>
          <div className="name">
            <input type="text" name="fullName" onChange={changeHandler} />
          </div>
          {formError.fullName && <span>{formError.fullName}</span>}

          <label htmlFor="">Email: </label>
          <div className="email">
            <input type="email" name="email" onChange={changeHandler} />
          </div>
          {formError.email && <span>{formError.email}</span>}

          <div className="gender">
            <label htmlFor="">Gender: </label>
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={changeHandler}
            />
            <label htmlFor="">Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={changeHandler}
            />
          </div>
          {formError.gender && <span>{formError.gender}</span>}

          <label htmlFor="">Languages Known: </label>
          <div className="checkbox">
            <label htmlFor="">Javacript</label>
            <input
              type="checkbox"
              value="javascript"
              name="language"
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="">CSS</label>
            <input
              type="checkbox"
              value="css"
              name="language"
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="">HTML</label>
            <input
              type="checkbox"
              value="html"
              name="language"
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="">PHP</label>
            <input
              type="checkbox"
              value="php"
              name="language"
              onChange={changeHandler}
            />
          </div>
          {formError.language && <span>{formError.language}</span>}

          <div className="dob">
            <label htmlFor="">Date Of Birth: </label>
            <input type="date" name="date" onChange={changeHandler} />
          </div>
          {formError.date && <span>{formError.date}</span>}

          <div className="selectcountry">
            <label htmlFor="">Select Country: </label>
            <select name="country" className="country" onChange={changeHandler}>
              <option value=""></option>
              <option value="india">India</option>
              <option value="uae">UAE</option>
              <option value="qatar">Qatar</option>
            </select>
          </div>
          {formError.country && <span>{formError.country}</span>}

          <div className="submit">
            <button className="button" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>

      <FormNextElement />
    </>
  );
}
export default FormElement;
