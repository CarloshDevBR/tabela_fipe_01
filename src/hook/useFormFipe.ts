'use client';

import { useReducer } from 'react';

interface FormState {
  brand: string;
  model: string;
  year: string;
}

export type FormAction = {
  type: string;
  payload: string;
};

export const ACTIONS = {
  SET_BRAND: 'SET_BRAND',
  SET_MODEL: 'SET_MODEL',
  SET_YEAR: 'SET_YEAR',
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case ACTIONS.SET_BRAND:
      return { ...state, brand: action.payload };

    case ACTIONS.SET_MODEL:
      return { ...state, model: action.payload };

    case ACTIONS.SET_YEAR:
      return { ...state, year: action.payload };

    default:
      return state;
  }
};

export const useFormFipe = () => {
  const [state, dispatch] = useReducer(formReducer, {
    brand: '',
    model: '',
    year: '',
  });

  return {
    state,
    dispatch,
  };
};
