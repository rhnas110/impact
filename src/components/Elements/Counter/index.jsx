import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "../../../utils";

const Counter = ({
  target,
  title,
  duration,
  triggerOnce,
  prefix,
  className,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce,
  });

  return (
    <div className={cn("text-center", className)} ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        useEasing={true}
      >
        {({ countUpRef }) => (
          <>
            <p className="text-4xl font-bold">
              <span ref={countUpRef} />
              {prefix || "+"}
            </p>
            <p className="text-xl">{title}</p>
          </>
        )}
      </CountUp>
    </div>
  );
};

export default Counter;
