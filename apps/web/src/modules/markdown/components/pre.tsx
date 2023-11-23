/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef, useState } from 'react';

import { cx } from 'class-variance-authority';
import { toast } from 'react-hot-toast';

import { Icons } from 'src/configs/icons';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

type PreProps = React.ComponentPropsWithRef<'pre'>;

// TODO: Clean up to component with best pracises is required
/**
 * The code is defining a React functional component called `Pre`. It takes in a prop called `props`
which is of type `PreProps`.
 * @param {PreProps} props - PreProps
 * @returns 
 */
export const Pre: React.FC<PreProps> = props => {
  const { className, children, ...rest } = props;

  const preRef = useRef<HTMLPreElement>(null);

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [shouldWrap, setShouldWrap] = useState(false);

  const [copy] = useCopyToClipboard();

  return (
    // word-break: break-word;
    // @apply nx-whitespace-pre-wrap md:nx-whitespace-pre;
    <pre
      {...rest}
      ref={preRef}
      className={cx([
        'group relative',
        // 'whitespace-pre-wrap break-words',
        className
      ])}
      data-word-wrap={shouldWrap}>
      {children}
      <div
        className={cx(
          'opacity-0 transition focus-within:opacity-100 group-hover:opacity-100',
          'absolute right-0 top-0 z-10 m-[11px] flex gap-1'
        )}>
        <button
          onClick={() => setShouldWrap(prev => !prev)}
          title='Wrap code'
          className={cx([
            'md:hidden',
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700'
          ])}>
          <Icons.textWrap />
        </button>
        <button
          onClick={() => {
            copy(preRef?.current?.textContent ?? '')
              .then(() => {
                setIsCopied(true);
                toast.custom(t => (
                  <div
                    className={`${
                      t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white dark:bg-[#222] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                    <div className='flex-1 w-0 p-4'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 pt-0.5 cursor-pointer'>
                          <Icons.copy className='h-10 w-10' />
                        </div>
                        <div className='ml-3 flex-1 cursor-pointer'>
                          <p className='text-sm font-medium text-gray-900 dark:text-white select-none'>
                            Copied Successfully
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex border-l border-gray-200 dark:border-gray-800'>
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className='w-full border transition-all border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#222] dark:text-white hover:bg-primary hover:text-white hover:dark:text-[#222] active:bg-primary/70 focus:outline-none focus:ring-0 focus:ring-indigo-500'>
                        Close
                      </button>
                    </div>
                  </div>
                ));
                setTimeout(() => setIsCopied(false), 1500);
              })
              .catch(err => {});
          }}
          title='Copy code'
          className={cx([
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700'
          ])}>
          {isCopied ? <Icons.check /> : <Icons.copy />}
        </button>
      </div>
    </pre>
  );
};
