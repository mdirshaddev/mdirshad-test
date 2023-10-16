import { useEffect } from 'react';

/**
 * Custom Hook for managing custom logics based on browser window api events
 *
 * @param object browser window api
 * @param event name of window event
 * @param callback function which register for window event
 * @param options additional options as some event needs it
 */
export const useWindowEvent = (
  object: Window & typeof globalThis,
  event: string,
  callback: () => void,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    object.addEventListener(event, callback, options);
    return () => object.removeEventListener(event, callback, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowEvent;
