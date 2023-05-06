import { useState } from 'react';

interface Type {
  regex: RegExp;
  message: string;
}

interface Types {
  email: Type;
  password: Type;
  number: Type;
}

const types: Types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.'
  }
};

interface Form {
  value: string;
  error: string | null;
  setValue: (value: string) => void;
  onChangeText: (value: string) => void;
  onBlur: () => boolean;
}

const useForm = (type: keyof Types | false): Form => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function validate(value: string): boolean {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChangeText(value: string): void {
    if (error) validate(value);
    setValue(value);
  }

  function onBlur(): boolean {
    return validate(value);
  }

  return {
    value,
    setValue,
    onChangeText,
    error,
    onBlur,
  };
};

export default useForm;
