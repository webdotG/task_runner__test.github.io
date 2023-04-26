import React from 'react';
import {useForm} from 'react-hook-form';
import style from './FormLogin.module.css';
import CheckBox from '../RemeberForgotCheck/RemeberForgotCheck';

//сначла буду вызывать метод handlesubmit который идкт из коробки хука useform 
//уже в нём буду использовать свой кастомный хэндлер onsubmit рписаный выше  

function FormLogin() {

  //создаю обьект используя хук useform для валидацию формы
  //метод register для регистрации полей формы
  //formstate обьект со свойствами я использую свойство errors для вывода ошибок
  //handleSubmit функция которая будет вызываться при нажатии на кнопку submit
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,                          //метод для очистки формы после отправки
  } = useForm({                     //в хук передаю обьект с настройками проверки
    mode: 'onChange'                  //mode-режим выбрал при изменении данных
  })


  //кастомный способ обработки формы
  //дефолтный handlesubmit будет передавать данные полей формы в мою data
  //если в handlesubmit есть какие-то ошибки то кастомный onsubmit вызываться не будет
  //onsubmit будет срабатывать тольео если нет ошибок
  //для проверки создаю алерт что бы сотреть что вообще передаётся
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();                         //очищаю форму после отправки
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style['form-login']} autoComplete='off'>
      <div className={style['form-login__name-wrapper']}>
        <label className={style['form-login__name-label']}>log in</label>
        <input className={style['form-login__name-input']}                                             //'firstname'=name'firstname' уникальный ключ
          {...register('user', {                      //метод импортированный из коробки хука useform-вохвращает обьект и для работы использую деструктуризацию
            required: 'обязательно заполнить',             //задаю правила для input вывожу сообщение если requirde не заполнен
            minLength: {
              value: 5,                                    //задаю минимальное еоличество символов 5
              message: 'минимум 5 символов'                //передаю сообщение об ошибке 
            }
          })} />
        <div className={style['form-login__name-error']}>
         {errors?.user && <p>{errors?.user?.message || 'минимум 5 символов'}</p>}
        </div>
      </div>
      <div className={style['form-login__password-wrapper']}>
        <label className={style['form-login__password-label']} >password</label>
        <input className={style['form-login__password-input']} type='password' 
          {...register('password', {                      //метод импортированный из коробки хука useform-вохвращает обьект и для работы использую деструктуризацию
            required: 'обязательно заполнить',             //задаю правила для input вывожу сообщение если requirde не заполнен
            minLength: {
              value: 5,                                    //задаю минимальное еоличество символов 5
              message: 'минимум 5 символов'                //передаю сообщение об ошибке 
            },
          })} 
        />
        <div className={style['form-login__password-error']}>
         {errors?.password && <p>{errors?.password?.message || 'неверный ввод'}</p>}
        </div>
      </div>
     
     
      <CheckBox className={style['form-login__remember-wrapper']}/>
     
     
     
      <div className={style['form-login__submit-btn__wrapper']}>
        <button className={style['form-login__submit-btn']} type="submit" disabled={!isValid}>enter</button>
      </div>
    </form>
  )
}

export default FormLogin