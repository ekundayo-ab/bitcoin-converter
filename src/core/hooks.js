import { useEffect, useRef, useState } from 'react';

export const useErrorSetter = (emptyField) => {
  const [fieldError, setFieldError] = useState(false)

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (!emptyField) { setFieldError(true) }
    if (emptyField && fieldError) { setFieldError(false) }
  }, [emptyField, fieldError])

  return [fieldError, setFieldError]
}
