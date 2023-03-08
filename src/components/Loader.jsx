import styled from "styled-components";
export const Loading = styled.div`
  width: 100%;
  max-height: 800px;
`;
const Loader = () => {
  return (
    <Loading>
      <svg
        role="img"
        width="100%"
        aria-labelledby="loading-aria"
        viewBox="0 0 600 600"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clip-path)"
          style={{fill: 'url(#fill)'}}
        ></rect>
        <defs>
          <clipPath id="clip-path">
            <rect x="15" y="15" rx="15" ry="15" width="570" height="570" />
          </clipPath>
          <linearGradient id="fill">
            <stop offset="0.599964" stopColor="#ffffff7c" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1.59996" stopColor="#fffffff4" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="2.59996" stopColor="#ffffff7c" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </Loading>
  );
};

export default Loader;
