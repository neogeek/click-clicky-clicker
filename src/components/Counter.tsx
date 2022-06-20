import { useEffect, useRef } from "react";

import { useMotionValue, useSpring } from "framer-motion";

import { format } from "../utils/number";

export default function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(
    () =>
      springValue.onChange((latest) => {
        if (ref.current) {
          ref.current.textContent = format(latest);
        }
      }),
    [springValue]
  );

  return <span ref={ref}>{format(value)}</span>;
}
