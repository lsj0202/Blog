import { User } from 'firebase/auth';
import { atom } from 'recoil';

export const userInfo = atom<User | null>({
  key: 'userInfo',
  default: null,
});
