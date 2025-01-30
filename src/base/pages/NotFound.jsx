import React from "react";

import "base/Assets/css/global.scss";
export default function NotFound() {
  const container = {
    position: "relative",
    overflow: "hidden",
    width: "80%",
    height: "90%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const title = {
    color: "#3f3d69",
    textAlign: "center",
    fontFamily: "ISN",
    fontSize: "2em",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    direction: "rtl",
    fontWeight: "bold",
  };

  const broken = {
    // "-webkit-animation": "=${brokenKeyFrame} 3s linear infinite",
    // "-moz-animation": "${brokenKeyFrame} 3s linear infinite",
    // "-ms-animation": "${brokenKeyFrame} 3s linear infinite",
    // "-o-animation": "${brokenKeyFrame} 3s linear infinite",
    animation: `broken404 3s infinite`,
    transform: "translate(0px,-12px)",
  };
  const img = {
    transform:
      "matrix(0.0687, 0.0016, -0.0016, 0.0687, 158.473, 105.0118) rotate(27deg)",
    width: "800",
    height: "600",
  };

  return (
    <div style={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="288.287"
        height="441.402"
        x="0"
        y="0"
        viewBox="0 0 288.287 441.402"
      >
        <path
          fill="#EAEAEA"
          d="M254.678 99.367c0-9.298-4.83-17.929-12.755-22.792l-88.01-53.553c-5.563-3.063-19.151 5.825-19.151 13.547l.297 28.379.217-29.718c.034-4.662 5.135-7.509 9.121-5.091l87.657 53.181c6.798 4.056 11.963 15.082 11.963 22.999l-.616 234.747-106.056-57.996-2.286-218.121-1.593 218.436a8.753 8.753 0 004.101 7.478l102.57 62.416c11.625 3.75 14.542-5.414 14.542-5.583V99.367z"
        ></path>
        <g>
          <path
            fill="#41B0FF"
            d="M245.381 349.177c.042 3.44-3.72 5.581-6.656 3.788l-103.051-63.539a6.157 6.157 0 01-2.885-5.262l1.809-247.975c.039-5.379 5.925-8.664 10.523-5.874l86.266 52.337c6.798 4.056 12.625 15.333 12.625 23.25l1.369 243.275z"
          ></path>
          <g fill="#3F3D69">
            <path d="M132.972 259.049l-.183 25.115a6.159 6.159 0 002.885 5.262l103.184 62.765c2.936 1.794 6.698-.347 6.656-3.788l-.297-24.24-112.245-65.114zM244.116 114.428l-.104-8.526c0-7.917-5.827-19.194-12.625-23.25L145.12 30.316c-4.599-2.79-10.484.495-10.523 5.874l-.082 11.192 109.601 67.046z"></path>
          </g>
        </g>
        <path
          fill="#2D2D2D"
          d="M145.851 81.487l85.361 52.57s-3.841 5.83-3.841 17.83v193.5l-91.007-52.32 9.176-175.095.311-36.485z"
          opacity="0.13"
        ></path>
        <g fill="#BABABA">
          <path d="M174.98 59.862v1.805c0 .767.399 1.479 1.053 1.881l25.062 15.366a.992.992 0 001.511-.846v-1.821c0-.969-.512-1.866-1.345-2.359l-24.97-14.773a.869.869 0 00-1.311.747zM143.568 77.214l88.289 54.344a7.154 7.154 0 013.404 6.092v.322c0 2.044-2.243 3.294-3.981 2.219l-88.334-54.628a6.306 6.306 0 01-2.981-5.045l-.057-1.135c-.097-1.934 2.012-3.184 3.66-2.169z"></path>
        </g>
        <g>
          <path
            fill="#AEB2EA"
            d="M174.965 364.732l-.084-.083a11.302 11.302 0 01-3.368-8.049v-60.833c0-7.196-7.63-11.872-14.018-8.56-11.458 5.941-53.463-26.922-53.463-26.922v57.682l70.933 46.765z"
          ></path>
          <linearGradient
            id="SVGID_1_"
            x1="163.012"
            x2="182.345"
            y1="354.605"
            y2="107.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#DBDBF5"></stop>
            <stop offset="0.131" stopColor="#E1E1EF"></stop>
            <stop offset="0.369" stopColor="#E4E4EC"></stop>
            <stop offset="0.592" stopColor="#E2E2EE"></stop>
            <stop offset="0.792" stopColor="#E9E9FF"></stop>
            <stop offset="1" stopColor="#E8E8E8"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_1_)"
            d="M145.242 82.752c-8.367 1.653-14.73 9.066-14.73 17.9v165.625l35.442 20.587v.004c3.195 1.502 5.559 4.72 5.559 8.723v60.706c0 6.344 5.094 11.513 11.437 11.606 8.625 0 33.229-11.458 33.896-31.875V161.486c0-16.986 5.878-24.146 13.757-26.164l-85.361-52.57z"
          ></path>
        </g>
        <g>
          <linearGradient
            id="SVGID_2_"
            x1="124.347"
            x2="108.014"
            y1="240.159"
            y2="275.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#DBDBF5"></stop>
            <stop offset="0.131" stopColor="#E1E1EF"></stop>
            <stop offset="0.369" stopColor="#E4E4EC"></stop>
            <stop offset="0.592" stopColor="#E2E2EE"></stop>
            <stop offset="0.792" stopColor="#E9E9FF"></stop>
            <stop offset="1" stopColor="#E8E8E8"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_2_)"
            d="M142.851 303.374l-1.571-4.75h-6.083l-2-4.417-5.75 2.25-3.75-8.917-12.667 3.167-.75-10.083-9.667-1.333-3.25-8.5h-9l-.667-6.417-8.083 2 1.25-11.083-8.833 6.75-.917-1.75 2.333-4.417-13.5-1 1.583-5.167-5.583 1.167s1.29-2.723 5.75-8.917c2.996-4.16 8.25-7.5 11.083-8.25s7 .333 9.833 2.25 83.333 50.917 83.333 50.917-11.856-4.5-23.094 16.5z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M75.051 240.062L72.988 241.312 149.738 288.124 151.238 286.999z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M115.113 271.624L110.238 277.874 140.926 297.311 145.926 290.311z"
          ></path>
        </g>
        <g style={broken}>
          <g>
            <g>
              <linearGradient
                id="SVGID_3_"
                x1="108.663"
                x2="74.33"
                y1="289.535"
                y2="403.868"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#DBDBF5"></stop>
                <stop offset="0.131" stopColor="#E1E1EF"></stop>
                <stop offset="0.369" stopColor="#E4E4EC"></stop>
                <stop offset="0.592" stopColor="#E2E2EE"></stop>
                <stop offset="0.792" stopColor="#E9E9FF"></stop>
                <stop offset="1" stopColor="#E8E8E8"></stop>
              </linearGradient>
              <path
                fill="url(#SVGID_3_)"
                d="M61.28 260.957l-5.5 1.833s-3 3-2.833 22.667c.167 19.667 2 53.333-5.5 67.333S23.78 375.457 23.78 375.457l86 52.222s28.333-9.222 29.333-41.555 0-55.833 0-55.833-.358-6.333 3.738-15.333l-1.571-4.667-6 .667-2-4.833-6.167 2-3.167-8.833-13.167 3.333-.667-10.167-9.667-1.333-2.833-8.167h-9.5l-.5-6.833-8.333 2.333 1.5-11.333-8.833 6.667-1.167-1.667 2.5-4.5-13.333-1 1.334-5.668z"
              ></path>
            </g>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M136.363 319.374L59.947 273.291 59.947 275.374 136.03 321.874z"
            ></path>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M134.863 326.457L104.03 307.124 104.03 317.791 134.527 336.545z"
            ></path>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M134.28 351.291L57.947 304.457 57.947 307.124 134.28 353.707z"
            ></path>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M134.28 357.624L103.363 338.291 103.363 349.457 134.28 368.207z"
            ></path>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M134.28 377.291L57.947 330.791 57.947 333.457 134.28 380.124z"
            ></path>
          </g>
          <g>
            <path
              fill="#3B8FFF"
              d="M134.28 383.874s-.583 7-2.75 8.583l-30.917-19.083s1.862-1.833 2.477-8.271l31.19 18.771z"
            ></path>
          </g>
          <g>
            <text
              fill="#3B8FFF"
              fontFamily="'Arial-BlackItalic'"
              fontSize="21.547"
              transform="rotate(41.777 -472.972 289.886)"
            >
              $
            </text>
          </g>
          <g>
            <text
              fill="#3B8FFF"
              fontFamily="'Arial-BlackItalic'"
              fontSize="21.547"
              transform="rotate(41.777 -477.623 312.113)"
            >
              $
            </text>
          </g>
          <g>
            <text
              fill="#3B8FFF"
              fontFamily="'Arial-BlackItalic'"
              fontSize="21.547"
              transform="rotate(41.777 -482.028 334.988)"
            >
              $
            </text>
          </g>
        </g>
        <g fill="#BABABA">
          <path d="M249.788 152.07a4.166 4.166 0 001.962-3.474l.262-17.851a1.903 1.903 0 00-2.645-1.752 3.884 3.884 0 00-2.368 3.576v17.953c-.001 1.431 1.573 2.305 2.789 1.548zM249.788 177.07a4.166 4.166 0 001.962-3.474l.262-17.851a1.903 1.903 0 00-2.645-1.752 3.884 3.884 0 00-2.368 3.576v17.953c-.001 1.431 1.573 2.305 2.789 1.548zM155.456 76.61l-12.943-8.039a5.185 5.185 0 01-2.449-4.347c-.026-2.326 2.539-3.754 4.503-2.508l12.223 7.758a5.129 5.129 0 012.381 4.331v.739c0 1.907-2.095 3.073-3.715 2.066zM210.441 101.937l22.349 13.602a5.082 5.082 0 012.411 4.88c-.216 2.028-2.493 3.117-4.208 2.012l-21.898-14.115c-1.762-1.112-2.646-3.289-1.857-5.617a2.327 2.327 0 013.203-.762z"></path>
        </g>
        <g>
          <path
            fill="none"
            d="M135.261 249.402L135.261 251.715 211.761 298.215 211.761 296.152z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M135.261 218.402L135.261 220.715 211.761 267.215 211.761 265.152z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M135.261 186.402L135.261 188.715 211.761 235.215 211.761 233.152z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M135.261 155.402L135.261 157.715 211.761 204.215 211.761 202.152z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M180.557 284.319L180.557 294.069 211.761 313.236 211.761 302.652z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M180.557 253.319L180.557 263.069 211.761 282.236 211.761 271.652z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M180.557 221.319L180.557 231.069 211.761 250.236 211.761 239.652z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M180.557 190.319L180.557 200.069 211.761 219.236 211.761 208.652z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M211.761 328.652L211.574 329.715 172.48 306.309 172.48 304.777z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M181.168 315.871l-.047.74a19.078 19.078 0 01-2.297 7.948l30.938 19.063s2.312-4.188 2.25-8.5l-30.844-19.251z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M202.605 351.465L201.34 352.418 172.48 334.387 172.48 333.137z"
          ></path>
          <path
            fill="#3B8FFF"
            d="M197.199 354.809L189.433 360.043 172.48 349.184 172.48 339.605z"
          ></path>
          <g fill="#3B8FFF">
            <circle cx="135.803" cy="133.194" r="0.875"></circle>
            <circle cx="140.366" cy="135.819" r="0.875"></circle>
            <circle cx="144.845" cy="138.736" r="0.875"></circle>
            <circle cx="149.282" cy="141.361" r="0.875"></circle>
            <circle cx="153.636" cy="144.152" r="0.875"></circle>
            <circle cx="158.116" cy="146.819" r="0.875"></circle>
            <circle cx="162.449" cy="149.361" r="0.875"></circle>
            <circle cx="166.907" cy="152.236" r="0.875"></circle>
            <circle cx="171.345" cy="154.756" r="0.875"></circle>
            <circle cx="175.699" cy="157.506" r="0.875"></circle>
            <circle cx="180.095" cy="160.215" r="0.875"></circle>
            <circle cx="184.407" cy="162.694" r="0.875"></circle>
            <circle cx="189.018" cy="165.777" r="0.875"></circle>
            <circle cx="193.477" cy="168.319" r="0.875"></circle>
            <circle cx="197.643" cy="170.923" r="0.875"></circle>
            <circle cx="202.497" cy="173.902" r="0.875"></circle>
            <circle cx="206.852" cy="176.59" r="0.875"></circle>
            <circle cx="211.247" cy="179.319" r="0.875"></circle>
          </g>
          <g fill="#3B8FFF">
            <circle cx="138.852" cy="96.277" r="0.875"></circle>
            <circle cx="143.414" cy="98.902" r="0.875"></circle>
            <circle cx="147.893" cy="101.819" r="0.875"></circle>
            <circle cx="152.331" cy="104.444" r="0.875"></circle>
            <circle cx="156.685" cy="107.236" r="0.875"></circle>
            <circle cx="161.164" cy="109.902" r="0.875"></circle>
            <circle cx="165.498" cy="112.444" r="0.875"></circle>
            <circle cx="169.956" cy="115.319" r="0.875"></circle>
            <circle cx="174.393" cy="117.84" r="0.875"></circle>
            <circle cx="178.748" cy="120.59" r="0.875"></circle>
            <circle cx="183.143" cy="123.298" r="0.875"></circle>
            <circle cx="187.456" cy="125.777" r="0.875"></circle>
            <circle cx="192.067" cy="128.861" r="0.875"></circle>
            <circle cx="196.525" cy="131.402" r="0.875"></circle>
            <circle cx="200.692" cy="134.006" r="0.875"></circle>
            <circle cx="205.546" cy="136.986" r="0.875"></circle>
            <circle cx="209.9" cy="139.673" r="0.875"></circle>
            <circle cx="214.296" cy="142.402" r="0.875"></circle>
          </g>
          <image
            style={img}
            width="1300"
            height="1040"
            overflow="visible"
            transform="translate(127.473 99.012) scale(.0687)"
            xlinkHref="data:image/png;base64,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"
          ></image>
        </g>
        <g>
          <path
            fill="#FBAD05"
            d="M237.761 389.255c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="374.568"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 363.348L219.34 380.6c.194.215.412.421.625.628l28.956-17.426c-.4-.158-.806-.312-1.225-.454zM253.003 365.923a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 362.052a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 386.931c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 367.593l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a14.229 14.229 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 363.348L219.34 380.6c.194.215.412.421.625.628l28.956-17.426c-.4-.158-.806-.312-1.225-.454zM253.003 365.923a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 362.052a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 386.931c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 367.593l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a14.229 14.229 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 361.755c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 374.474c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.784-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M237.761 381.057c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="366.369"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 355.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 357.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 353.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 378.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 359.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 355.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 357.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 353.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 378.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 359.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 353.557c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 366.275c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M237.761 381.057c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="366.369"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 355.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 357.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 353.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 378.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 359.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 355.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 357.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 353.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 378.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 359.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 353.557c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 366.275c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M237.761 373.057c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="358.369"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 347.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 349.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 345.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 370.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 351.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 347.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 349.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 345.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 370.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 351.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 345.557c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 358.275c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M237.761 365.057c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="350.369"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 339.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 341.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 337.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 362.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 343.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 339.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 341.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 337.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 362.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 343.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 337.557c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 350.275c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M237.761 357.057c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.896 7.618-11.375 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="237.761"
            cy="342.369"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M247.696 331.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 333.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 329.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 354.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 335.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M247.696 331.15l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426c-.4-.159-.806-.313-1.225-.454zM253.003 333.724a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM242.053 329.854a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM233.383 354.732c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM255.119 335.395l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.856 13.856 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M237.605 329.557c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.332-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M217.761 342.275c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.278-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M217.074 405.715c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.897 7.618-11.376 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="217.074"
            cy="391.027"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M227.009 379.808l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a24.596 24.596 0 00-1.225-.454zM232.315 382.382a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 378.512a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 403.391c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 384.053l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M227.009 379.808l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a24.596 24.596 0 00-1.225-.454zM232.315 382.382a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 378.512a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 403.391c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 384.053l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M216.918 378.215c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.333-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M197.074 390.934c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.279-.166-20.344-5.784-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M217.074 398.006c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.897 7.619-11.376 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="217.074"
            cy="383.319"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g fill="#BA8102">
            <path d="M227.009 372.099l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a26.765 26.765 0 00-1.225-.454zM232.315 374.674a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 370.804a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 395.682c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 376.345l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
          </g>
          <g fill="#FEB801">
            <path d="M227.009 372.099l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a26.765 26.765 0 00-1.225-.454zM232.315 374.674a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 370.804a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 395.682c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 376.345l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
          </g>
          <path
            fill="#BA8102"
            d="M216.918 370.506c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.333-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M197.074 383.225c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.279-.165-20.344-5.783-20.344-12.705z"
          ></path>
          <path
            fill="#FBAD05"
            d="M217.074 389.715c-13.183 0-23.901-6.373-24.234-14.309l-.016.017v10.104l.021-3.84c.436 7.88 11.113 15.188 24.229 15.188s23.793-7.308 24.229-15.188l.021 3.84v-9.313l-.07-.129c-.897 7.618-11.376 13.63-24.18 13.63z"
          ></path>
          <ellipse
            cx="217.074"
            cy="375.027"
            fill="#FFE30B"
            rx="24.25"
            ry="14.688"
          ></ellipse>
          <g>
            <g fill="#BA8102">
              <path d="M227.009 363.808l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a24.596 24.596 0 00-1.225-.454zM232.315 366.382a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 362.512a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 387.391c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 368.053l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
            </g>
            <g fill="#FEB801">
              <path d="M227.009 363.808l-28.356 17.252c.194.215.412.421.625.628l28.956-17.426a24.596 24.596 0 00-1.225-.454zM232.315 366.382a19.695 19.695 0 00-1.655-.995l-28.923 18.243a20.55 20.55 0 002.054 1.178l28.524-18.426zM221.365 362.512a33.855 33.855 0 00-4.448-.297c-11.512 0-20.844 5.694-20.844 12.719 0 .878.146 1.735.424 2.564l24.868-14.986zM212.696 387.391c1.363.171 2.775.262 4.222.262 11.512 0 20.844-5.694 20.844-12.719 0-1.498-.447-2.93-1.227-4.265l-23.839 16.722zM234.431 368.053l-26.612 18.31c.211.063.419.128.634.186l26.724-17.747a13.5 13.5 0 00-.746-.749z"></path>
            </g>
          </g>
          <path
            fill="#BA8102"
            d="M216.918 362.215c-.054 0-.105.005-.159.005 11.438.053 20.685 5.722 20.685 12.714s-9.247 12.661-20.685 12.714c.054 0 .105.005.159.005 11.512 0 20.844-5.694 20.844-12.719s-9.333-12.719-20.844-12.719z"
          ></path>
          <path
            fill="#FF8B22"
            d="M197.074 374.934c0-6.921 9.065-12.54 20.344-12.703-.168-.002-.331-.015-.5-.015-11.512 0-20.844 5.694-20.844 12.719s9.332 12.719 20.844 12.719c.169 0 .332-.013.5-.015-11.279-.166-20.344-5.784-20.344-12.705z"
          ></path>
        </g>
      </svg>

      <div style={title}>صفحه ی مورد نظر یافت نشد!</div>
    </div>
  );
}
