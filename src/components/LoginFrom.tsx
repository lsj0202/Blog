import { Link } from 'react-router-dom';

const LoginFrom = () => {
  return (
    <form action='/post' method='POST' className='form from--lg'>
      <div className='form__title'>로그인</div>
      <div className='form__block'>
        <label htmlFor='email'>이메일</label>
        <input type='email' name='email' id='email' required />
      </div>
      <div className='form__block'>
        <label htmlFor='password'>비밀번호</label>
        <input type='password' name='password' id='password' required />
      </div>
      <div className='form__block'>
        계정이 없으신가요?
        <Link to='/signup' className='form__link'>
          회원가입하기
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

export default LoginFrom;