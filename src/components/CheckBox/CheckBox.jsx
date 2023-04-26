import React, { useState } from "react";
import style from './CheckBox.component.css'
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
    <div>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span>{icon}</span>
    </div>
  )
}

export default CheckBox;


// {checked
      //   ? <span className={style['form-login__remember-input--checkbox']}>
      //     <RiCheckboxCircleLine className={style['form-login__remember-input--checkbox--icon']} />
      //   </span>
      //   : <span className={style['form-login__remember-input--checkbox']}>
      //     <RiCheckboxBlankCircleLine className={style['form-login__remember-input--checkbox--icon']} />
      //   </span>
      // }
