import * as React from "react";

const SLIDE_DURATION = 4000;

const useProgress = (animate, time) => {
  let [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (animate) {
      let rafId = null;
      let start = null;
      let step = (timestamp) => {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        setProgress(progress);
        if (progress < time) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  }, [animate, time]);

  return animate ? Math.min(progress / time, time) : 0;
};

function Carousel(props) {
  return <section {...props} />;
}

function Slides(props) {
  return <ul className="Slides" {...props} />;
}

function Slide({ isCurrent, takeFocus, id, children }) {
  const ref = React.useRef();

  React.useEffect(() => {
    if (isCurrent && takeFocus) {
      ref.current.focus();
    }
  }, [isCurrent, takeFocus]);

  return (
    <li
      ref={ref}
      aria-hidden={!isCurrent}
      tabIndex="-1"
      aria-labelledby={id}
      className="Slide"
    >
      {children}
    </li>
  );
}

function SlideNav(props) {
  return <ul className="SlideNav" {...props} />;
}

function SlideNavItem({ isCurrent, ...props }) {
  return (
    <li className="SlideNavItem">
      <button type="button" {...props} aria-current={isCurrent}>
        <span />
      </button>
    </li>
  );
}

function Controls(props) {
  return <div className="Controls" {...props} />;
}

// function IconButton({ className = "", ...props }) {
//   return (
//     <button type="button" {...props} className={"IconButton " + className} />
//   );
// }

function IconButton({ className = "", ...rest }) {
  return <button type="button" {...rest} className="IconButton" />;
}

function ProgressBar({ animate, time }) {
  let progress = useProgress(animate, time);

  return (
    <div className="ProgressBar">
      <div style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

function Slider({
  slides = [
    {
      content: <div></div>,
    },
  ],
}) {
  let [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
        case "PROGRESS":
          return {
            ...state,
            isPlaying: action.type === "PROGRESS",
            currentIndex: (state.currentIndex + 1) % slides.length,
          };
        case "PAUSE":
          return {
            ...state,
            isPlaying: false,
          };
        case "PLAY":
          return {
            ...state,
            isPlaying: true,
          };
        case "PREV":
          return {
            ...state,
            currentIndex:
              (state.currentIndex - 1 + slides.length) % slides.length,
            isPlaying: false,
          };
        case "GOTO":
          return {
            ...state,
            takeFocus: true,
            currentIndex: action.index,
          };
        case "UNSET_FOCUS":
          return {
            ...state,
            takeFocus: false,
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      isPlaying: true,
      takeFocus: false,
    }
  );

  React.useEffect(() => {
    if (state.isPlaying) {
      let timeout = setTimeout(() => {
        dispatch({ type: "PROGRESS" });
      }, SLIDE_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [state.currentIndex, state.isPlaying]);

  React.useEffect(() => {
    if (state.takeFocus) {
      dispatch({ type: "UNSET_FOCUS" });
    }
  }, [state.takeFocus]);

  return (
    <Carousel aria-label="Images from Space">
      <Slides>
        {slides.map((image, index) => (
          <Slide
            key={index}
            id={`image-${index}`}
            // image={image.img}
            // title={image.title}
            isCurrent={index === state.currentIndex}
            takeFocus={state.takeFocus}
            children={image.content}
          />
        ))}
      </Slides>

      <Controls>
        {state.isPlaying ? (
          <IconButton
            aria-label="Pause"
            onClick={() => {
              dispatch({ type: "PAUSE" });
            }}
            children={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                fill="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            }
          />
        ) : (
          <IconButton
            aria-label="Play"
            onClick={() => {
              dispatch({ type: "PLAY" });
            }}
            children={
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            }
          />
        )}
        <IconButton
          className="ControlPrevious"
          aria-label="Previous Slide"
          onClick={() => {
            dispatch({ type: "PREV" });
          }}
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          }
        />
        <IconButton
          className="ControlForward"
          aria-label="Next Slide"
          onClick={() => {
            dispatch({ type: "NEXT" });
          }}
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        />
      </Controls>

      <SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem
            key={index}
            isCurrent={index === state.currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => {
              dispatch({ type: "GOTO", index });
            }}
          />
        ))}
      </SlideNav>

      <ProgressBar
        key={state.currentIndex + state.isPlaying}
        time={SLIDE_DURATION}
        animate={state.isPlaying}
      />
    </Carousel>
  );
}
export { Slider };
