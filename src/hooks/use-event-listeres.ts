import { useEffect, useRef } from "react";

interface EventListenerProps {
  eventType: string;
  callback: () => void;
}

export default function useEventListener(
  eventType,
  callback,
  element = window as unknown
): EventListenerProps {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
