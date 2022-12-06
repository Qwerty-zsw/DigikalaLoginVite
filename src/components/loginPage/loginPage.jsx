import { useState } from "react";
import Btn from "../button/btn";
import "./loginPage.css";

const emailreg =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const phonereg = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

const LoginPage = () => {

  const [inpVal, setInpVal] = useState("");
  const [regError, setregError] = useState(true);
  const [borderColor, setborderColor] = useState(true);

  function clickHandle(ee) {
    ee.preventDefault()

    const emailregCheck = emailreg.test(inpVal);
    const phoneregCheck = phonereg.test(inpVal);

    if (emailregCheck || phoneregCheck) {
      setregError(true);
      setborderColor(true);
    } else {
      setregError(false);
      setborderColor(false);
    }
  }

  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center"
      dir="rtl"
    >
      <div className="w-auto h-auto border rounded d-flex flex-column align-items-center p-4 pt-5">
        <div className="w-50 text-center">
          <img
            className="w-75"
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="digikala"
          />
        </div>

        <div className="w-100">
          <h4 className="mt-4">ورود | ثبت‌نام</h4>
          <p className="mb-0 mt-4 fs-8">سلام!</p>
          <p className="fs-8">لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </div>

        <form className="w-100" action="submit">
          <input
            className={`w-100 pe-4 rounded form-control mt-2 ${
              borderColor ? "border-info" : "border-danger"
            }`}
            value={inpVal}
            onChange={(event) => setInpVal(event.target.value)}
          />
          <small
            className={`w-100 text-danger mt-1 ${
              regError ? "d-none" : "d-block"
            }`}
          >
            شماره موبایل یا ایمیل نادرست است.
          </small>
          <Btn onClick={clickHandle} variant='danger' className={"btn-log mt-5"} text='ورود'/>
        </form>

        <p className="fs-8 mt-3">
          ورود شما به معنای پذیرش
          <a href="#"> شرایط دیجی‌کالا </a>و<a href="#"> قوانین حریم‌خصوصی </a>
          است
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
