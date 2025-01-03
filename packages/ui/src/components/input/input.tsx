import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

import { classes } from '../../utils';

type Properties = {
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
  error?: boolean;
  success?: boolean;
  asTextArea?: boolean;
};

/*235
236
238*/


export const Input = forwardRef(
  (
    { value, onChange, className, success, error, asTextArea }: Properties,
    reference: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const properties = {
      className: classes(
        'w-full resize-none min-h-11 rounded-xl border border-secondary bg-white px-3 py-2 text-body5 text-neutralGreen-900 caret-neutralGreen-900 shadow-input placeholder:text-neutral-600 lg:text-body4',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
        success && 'border-mint-400 focus-visible:border-mint-400',
        error && 'border-red-400 focus-visible:border-red-400',
        className,
      ),
      value,
      onChange,
    };

    if (asTextArea) {
      return (
        <textarea
          ref={reference as ForwardedRef<HTMLTextAreaElement>}
          rows={2}
          {...properties}
        />
      );
    }
    return (
      <input
        ref={reference as ForwardedRef<HTMLInputElement>}
        {...properties}
      />
    );
  },
);

Input.displayName = 'Input';
