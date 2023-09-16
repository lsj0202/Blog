import React from 'react';
import { Link } from 'react-router-dom';

const SingupForm = () => {
  return (
    <form action='/post' method='POST' className='form from--lg'>
      <div className='form__title'>회원가입</div>
      <div className='form__block'>
        <label htmlFor='email'>이메일</label>
        <input type='email' name='email' id='email' required />
      </div>
      <div className='form__block'>
        <label htmlFor='password'>비밀번호</label>
        <input type='password' name='password' id='password' required />
      </div>
      <div className='form__block'>
        <label htmlFor='password'>비밀번호 확인</label>
        <input type='password_confirm' name='password_confirm' id='password_confirm' required />
      </div>
      <div className='form__block'>
        계정이 이미 있으신가요?
        <Link to='/login' className='form__link'>
          로그인하기
        </Link>
      </div>
      <div className='form__block'>
        <button type='submit' className='form__btn--submit'>
          로그인
        </button>
      </div>
    </form>
  );
};

export default SingupForm;
