/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { toast, Toaster } from 'react-hot-toast';

import { TRPCProvider } from 'src/modules/client';

interface window extends Window {
  workbox?: any;
}

declare const window: window;

/**
 * The RootProvider component is a wrapper that provides session context to its children components.
 * @param props - The `props` parameter is of type `React.PropsWithChildren`. It is a generic type that
 * allows you to pass any additional props to the `RootProvider` component, along with the `children`
 * prop. The `children` prop is a special prop in React that allows you to render
 * @returns The RootProvider component is returning the SessionProvider component with the
 * props.children passed as its children.
 */
export function RootProvider(props: React.PropsWithChildren) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production' &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
        toast.custom(t => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 pt-0.5'>
                  {/* TODO: Placeholder for some animated icons */}
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    PWA Install Successfully
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Your app is now cached for offline use.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                Close
              </button>
            </div>
          </div>
        ));
      });

      wb.addEventListener('controlling', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (event: any) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (
          confirm(
            'A newer version of this web app is available, reload to update?'
          )
        ) {
          wb.addEventListener('controlling', (event: any) => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
          );
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TRPCProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange>
        <Toaster position='bottom-center' reverseOrder={false} />
        <SessionProvider>{props.children}</SessionProvider>
      </NextThemesProvider>
    </TRPCProvider>
  );
}
