import React, { useState } from "react";
import style from './RemeberForgotCheck.component.css'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

function CheckBox() {
  const [checked, setChecked] = useState(true);

  let icon;
  if (checked) {
    icon = <RiCheckboxCircleLine className={style['form-login__remember-input--checkbox--icon']} />
  } else {
    icon = <RiCheckboxBlankCircleLine className={style['form-login__remember-input--checkbox--icon']} />
  }

  return (
    <div className={style['form-login__remember-wrapper']}>
      <input className={style['form-login__remember-input']} type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span className={['form-login__remember--checkbox--icon']}>{icon}</span>
      <label className={style['form-login__remember-label']} for="form-login-remember">запомнить</label>
      <a className={style['form-login__forgot-password-link']}>забыли пароль ?</a>
    </div>
  )

}

export default CheckBox;


