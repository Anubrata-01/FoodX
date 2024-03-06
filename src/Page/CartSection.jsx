import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUserDetails, setUserDetails } from '../Redux Store/restaurantSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utilities/Firebase';
import { Heart, Trash } from 'lucide-react';
import styled from 'styled-components';


export const CartSection = ({ Navbar }) => {
  const [sign, setSign] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(setUserDetails({ email, uid, displayName }));
        setSign(false);
      } else {
        dispatch(removeUserDetails());
        setSign(true);
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  return(
    <div>
      <Navbar/>
    </div>
  )
};



// export  CartSection;





