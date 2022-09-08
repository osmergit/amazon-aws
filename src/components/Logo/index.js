import * as React from "react"
import {Svg} from './styles'
export const Logo = (props) => (
	  <Svg
	    width={765.35}
	    height={164}
	    xmlns="http://www.w3.org/2000/svg"
	    viewBox="-132.675 -7 765.35 164"
	    style={{
		          background: "0 0",
			        }}
	    preserveAspectRatio="xMidYMid"
	    {...props}
	  >
	    <defs>
	      <linearGradient
	        id="b"
	        x1={0}
	        x2={1}
	        y1={0.5}
	        y2={0.5}
	        gradientUnits="objectBoundingBox"
	      >
	        <stop offset={0} stopColor="red" />
	        <stop offset={0.17} stopColor="#f90" />
	        <stop offset={0.34} stopColor="#ff4" />
	        <stop offset={0.51} stopColor="#9f0" />
	        <stop offset={0.68} stopColor="#09f" />
	        <stop offset={0.85} stopColor="#00f" />
	        <stop offset={1} stopColor="#90f" />
	      </linearGradient>
	      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
	        <feMorphology
	          operator="dilate"
	          radius="1,2"
	          in="SourceGraphic"
	          result="dilate"
	        />
	        <feColorMatrix
	          in="dilate"
	          result="color"
	          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
	        />
	        <feOffset dy={2} result="offset" />
	        <feGaussianBlur stdDeviation={3} />
	        <feOffset dy={3} />
	        <feColorMatrix
	          result="blur"
	          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
	        />
	        <feMerge>
	          <feMergeNode in="blur" />
	          <feMergeNode in="offset" />
	          <feMergeNode in="SourceGraphic" />
	        </feMerge>
	      </filter>
	    </defs>
	    <g filter="url(#a)">
	      <path
	        d="M52.52-58.12h11.76L36.76-2.07q-.65 1.3-1.93 2.09-1.27.79-2.81.79-1.5 0-2.78-.79-1.28-.79-1.97-2.09L-.2-58.12h11.79l20.43 41.87 20.5-41.87Zm73.24 5.31V0h-10.54v-14.27H78.18V0H67.64v-29.06q0-6.36 2.19-11.71 2.19-5.35 6.08-9.2 3.89-3.85 9.2-6 5.31-2.15 11.59-2.15h23.75q1.09 0 2.06.41.98.4 1.71 1.13.73.73 1.13 1.71.41.97.41 2.06ZM78.18-29.06v4.26h37.04v-22.78H96.7q-.49 0-2.05.14-1.56.14-3.61.71-2.04.57-4.31 1.74-2.27 1.18-4.18 3.25-1.9 2.06-3.14 5.16-1.23 3.1-1.23 7.52ZM193.84-17.1q0 3.12-.79 5.61t-2.09 4.4q-1.29 1.9-3.03 3.24-1.75 1.34-3.61 2.19-1.87.85-3.79 1.25-1.93.41-3.63.41h-40.65v-10.54h40.65q3.04 0 4.72-1.78 1.69-1.78 1.69-4.78 0-1.46-.45-2.68-.45-1.21-1.28-2.1-.83-.9-2.02-1.38-1.2-.49-2.66-.49h-24.23q-2.56 0-5.52-.91-2.95-.91-5.49-2.94-2.53-2.03-4.21-5.31-1.68-3.28-1.68-8.02t1.68-8.01q1.68-3.26 4.21-5.31 2.54-2.04 5.49-2.95 2.96-.92 5.52-.92h35.86v10.54h-35.86q-3 0-4.68 1.82-1.69 1.83-1.69 4.83 0 3.04 1.69 4.8 1.68 1.76 4.68 1.76h24.31q1.71.04 3.61.47 1.9.42 3.79 1.32 1.88.89 3.59 2.25 1.7 1.35 3.02 3.26 1.31 1.9 2.08 4.37.77 2.48.77 5.6Zm65.78-35.71V0h-10.54v-14.27h-37.04V0H201.5v-29.06q0-6.36 2.19-11.71 2.19-5.35 6.08-9.2 3.89-3.85 9.2-6 5.31-2.15 11.59-2.15h23.75q1.09 0 2.07.41.97.4 1.7 1.13.73.73 1.13 1.71.41.97.41 2.06Zm-47.58 23.75v4.26h37.04v-22.78h-18.52q-.49 0-2.05.14-1.56.14-3.6.71-2.05.57-4.32 1.74-2.27 1.18-4.17 3.25-1.91 2.06-3.14 5.16-1.24 3.1-1.24 7.52Zm134.87-5.31v10.62H313.6v-10.62h33.31Zm4.71-23.75v10.54h-42.23V0h-10.54v-52.81q0-1.09.4-2.06.41-.98 1.12-1.71.71-.73 1.68-1.13.97-.41 2.11-.41h47.46Zm64.76 5.31V0h-10.54v-14.27H368.8V0h-10.54v-29.06q0-6.36 2.19-11.71 2.19-5.35 6.08-9.2 3.89-3.85 9.2-6 5.31-2.15 11.59-2.15h23.75q1.09 0 2.07.41.97.4 1.7 1.13.73.73 1.13 1.71.41.97.41 2.06ZM368.8-29.06v4.26h37.04v-22.78h-18.52q-.49 0-2.05.14-1.56.14-3.6.71-2.05.57-4.32 1.74-2.27 1.18-4.17 3.25-1.91 2.06-3.15 5.16-1.23 3.1-1.23 7.52Zm111.85 18.52V0h-38.01q-1.46 0-3.14-.34-1.68-.35-3.32-1.08-1.65-.73-3.15-1.88-1.49-1.16-2.65-2.8-1.15-1.64-1.84-3.81-.69-2.17-.69-4.88v-28.53q0-1.46.34-3.14.35-1.69 1.08-3.33.73-1.64 1.9-3.14 1.18-1.5 2.82-2.65 1.64-1.16 3.79-1.85 2.14-.69 4.86-.69h38.01v10.54h-38.01q-2.07 0-3.16 1.1-1.1 1.09-1.1 3.24v28.45q0 2.02 1.12 3.14 1.11 1.11 3.14 1.11h38.01Zm57.76-23.83v10.62h-33.28v-10.62h33.28Zm4.74 23.83V0h-38.02q-2.19 0-4.78-.77-2.59-.77-4.8-2.53-2.21-1.77-3.69-4.58-1.48-2.82-1.48-6.91v-38.02q0-1.09.41-2.06.4-.98 1.11-1.71.71-.73 1.68-1.13.98-.41 2.11-.41h47.46v10.54h-42.23v32.79q0 2.06 1.09 3.16 1.1 1.09 3.2 1.09h37.94Z"
	        fill="url(#b)"
	        transform="translate(-21.916 104.465)"
	      />
	    </g>
	  </Svg>
)