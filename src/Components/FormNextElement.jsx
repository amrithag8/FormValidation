import { useState } from "react";
function FormNextElement() {
  const [formError, setFormError] = useState({
    fullName: false,
    email: false,
    gender: false,
    date: false,
    country: false,
  });

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    gender: "",
    date: "",
    country: "",
  });
  let fnValue;

  function formChangeHandler(event) {
    validateFormonBlur(event);

    setValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  function validateFormonBlur(e) {
    let error = false;
    const { name, value } = e.target;
    if (name === "fullName" && value === "") {
      error = true;
    } else if (name === "email" && value === "") {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "date" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }

    setFormError((prev) => {
      return { ...prev, [name]: error };
    });
  }

  function formOnSubmitHandler(event) {
    event.preventDefault();

    // console.log("fn value", fnValue);

    if (
      Object.values(formError).some((errors) => {
        return errors === true;
      })
    ) {
      console.log("form not submitted");
    } else {
      console.log("valid");
      console.log("values are", values);
    }
  }

  return (
    <>
      <h2>Form Task II Using Onchange</h2>

      <div className="formEl">
        <form className="form" onSubmit={formOnSubmitHandler}>
          <label htmlFor="" className="name-input">
            FullName:
          </label>
          <div className="name name-input">
            <input type="text" name="fullName" onChange={formChangeHandler} />
          </div>
          {formError.fullName && <span>Full Name is required</span>}

          <label htmlFor="" className="email-input">
            Email:
          </label>
          <div className="email">
            <input type="email" name="email" onChange={formChangeHandler} />
          </div>
          {formError.email && <span>Email is required</span>}

          <div className="gender">
            <label htmlFor="">Gender: </label>
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formChangeHandler}
            />
            <label htmlFor="">Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formChangeHandler}
            />
          </div>
          {formError.gender && <span>Gender is required</span>}

          <div className="dob">
            <label htmlFor="">Date Of Birth: </label>
            <input type="date" name="date" onChange={formChangeHandler} />
          </div>
          {formError.date && <span>DOB is required</span>}

          <div className="selectcountry">
            <label htmlFor="">Select Country: </label>
            <select
              name="country"
              className="country"
              onChange={formChangeHandler}
            >
              <option value=""></option>
              <option value="india">India</option>
              <option value="uae">UAE</option>
              <option value="qatar">Qatar</option>
            </select>
          </div>
          {formError.country && <span>Country is required</span>}

          <div className="submit">
            <button className="button" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FormNextElement;
