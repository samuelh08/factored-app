import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/user';

export default function LogOut() {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    context?.setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }, [context, navigate]);

  return null;
}
