import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  if (props.code === "01d") {
    return (
      <svg
        className="clear-day"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#FF831B" />
      </svg>
    );
  } else if (props.code === "01n") {
    return (
      <svg
        className="clear-night"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M60.3128 46.3614C56.3106 48.4201 51.7715 49.5821 46.961 49.5821C30.8181 49.5821 17.7316 36.4957 17.7316 20.3527C17.7316 12.4406 20.8753 5.26268 25.9818 0C11.1857 2.81564 0 15.819 0 31.435C0 49.1081 14.3269 63.435 32 63.435C44.2825 63.435 54.9487 56.5151 60.3128 46.3614Z"
          fill="#FFE29F"
        />
        <path
          d="M52.6408 9.13196L54.6489 18.2551L64.0001 20.2142L54.6489 22.1733L52.6408 31.2965L50.6327 22.1733L41.2815 20.2142L50.6327 18.2551L52.6408 9.13196Z"
          fill="#F5C456"
        />
      </svg>
    );
  } else if (props.code === "02d") {
    return (
      <svg
        className="rain"
        width="64"
        height="38"
        viewBox="0 0 64 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.57541"
          y="23.9553"
          width="55.2402"
          height="13.9441"
          rx="6.97207"
          fill="white"
        />
        <circle cx="8.49162" cy="29.4079" r="8.49162" fill="white" />
        <circle cx="19.1285" cy="18.7709" r="10.7263" fill="white" />
        <circle cx="38.7039" cy="15.4637" r="15.4637" fill="white" />
        <circle cx="54.1676" cy="28.067" r="9.8324" fill="white" />
      </svg>
    );
  } else if (props.code === "02n") {
    return (
      <svg
        className="cloudy-night"
        width="64"
        height="48"
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 27.2674C2.37605 28.5155 5.0813 29.2217 7.95148 29.2217C17.4084 29.2217 25.0748 21.5553 25.0748 12.0983C25.0748 7.37479 23.1622 3.09795 20.0692 0C28.6808 1.67944 35.1804 9.26446 35.1804 18.3675C35.1804 28.703 26.8018 37.0816 16.4664 37.0816C9.35248 37.0816 3.1657 33.1122 0 27.2674Z"
          fill="#FFE29F"
        />
        <rect
          x="10.8176"
          y="34.9603"
          width="48.6194"
          height="12.2729"
          rx="6.13643"
          fill="white"
        />
        <circle cx="15.1445" cy="39.7593" r="7.47385" fill="white" />
        <circle cx="24.5066" cy="30.3973" r="9.44065" fill="white" />
        <circle cx="41.7358" cy="27.4865" r="13.6103" fill="white" />
        <circle cx="55.3458" cy="38.5792" r="8.65393" fill="white" />
      </svg>
    );
  } else if (
    props.code === "03d" ||
    props.code === "03n" ||
    props.code === "04d" ||
    props.code === "04n"
  ) {
    return (
      <svg
        className="cloudy"
        width="64"
        height="38"
        viewBox="0 0 64 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.57541"
          y="23.9553"
          width="55.2402"
          height="13.9441"
          rx="6.97207"
          fill="white"
        />
        <circle cx="8.49162" cy="29.4079" r="8.49162" fill="white" />
        <circle cx="19.1285" cy="18.7709" r="10.7263" fill="white" />
        <circle cx="38.7039" cy="15.4637" r="15.4637" fill="white" />
        <circle cx="54.1676" cy="28.067" r="9.8324" fill="white" />
      </svg>
    );
  } else if (
    props.code === "09d" ||
    props.code === "09n" ||
    props.code === "10d" ||
    props.code === "10n"
  ) {
    return (
      <svg
        className="rainy"
        width="64"
        height="57"
        viewBox="0 0 64 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.57541"
          y="23.9553"
          width="55.2402"
          height="13.9441"
          rx="6.97207"
          fill="white"
        />
        <circle cx="8.49162" cy="29.4078" r="8.49162" fill="white" />
        <circle cx="19.1285" cy="18.7709" r="10.7263" fill="white" />
        <circle cx="38.7039" cy="15.4637" r="15.4637" fill="white" />
        <circle cx="54.1676" cy="28.067" r="9.8324" fill="white" />
        <rect
          x="16.9891"
          y="41.6582"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="27.4618"
          y="41.6582"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="37.9345"
          y="41.6582"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="48.4073"
          y="41.6582"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="17.2218"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="27.6945"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="38.1673"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="48.64"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="17.2218"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="27.6945"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="38.1673"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
        <rect
          x="48.64"
          y="50.9673"
          width="2.09455"
          height="5.58545"
          rx="1.04727"
          fill="#55B6ED"
        />
      </svg>
    );
  } else if (props.code === "11d" || props.code === "11n") {
    return (
      <svg
        className="thunderstorm"
        width="64"
        height="67"
        viewBox="0 0 64 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.57541"
          y="23.9553"
          width="55.2402"
          height="13.9441"
          rx="6.97207"
          fill="white"
        />
        <circle cx="8.49162" cy="29.4078" r="8.49162" fill="white" />
        <circle cx="19.1285" cy="18.7709" r="10.7263" fill="white" />
        <circle cx="38.7039" cy="15.4637" r="15.4637" fill="white" />
        <circle cx="54.1676" cy="28.067" r="9.8324" fill="white" />
        <path
          d="M26.5611 46.9544C28.0926 44.5008 31.8969 45.8954 31.5224 48.7732V48.7732C31.3485 50.1094 30.2174 51.1041 28.8719 51.1041V51.1041C26.7469 51.1041 25.438 48.7537 26.5611 46.9544V46.9544Z"
          fill="#F5C456"
        />
        <path
          d="M34.9745 54.3843C33.424 56.8572 29.588 55.4163 30.0065 52.5181V52.5181C30.1975 51.1949 31.3246 50.2178 32.6597 50.2178V50.2178C34.7934 50.2178 36.1058 52.5799 34.9745 54.3843V54.3843Z"
          fill="#F5C456"
        />
      </svg>
    );
  } else if (props.code === "13d" || props.code === "13n") {
    return (
      <svg
        className="snowy"
        width="64"
        height="54"
        viewBox="0 0 64 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.62909"
          y="23.9709"
          width="59.8109"
          height="13.9636"
          rx="6.98182"
          fill="white"
        />
        <circle cx="8.49162" cy="29.4078" r="8.49162" fill="white" />
        <circle cx="19.1285" cy="18.7709" r="10.7263" fill="white" />
        <circle cx="38.7039" cy="15.4637" r="15.4637" fill="white" />
        <circle cx="54.1676" cy="28.067" r="9.8324" fill="white" />
        <circle cx="49.5709" cy="44.4509" r="1.39636" fill="white" />
        <circle cx="40.0291" cy="44.4509" r="1.39636" fill="white" />
        <circle cx="30.4873" cy="44.4509" r="1.39636" fill="white" />
        <circle cx="20.9455" cy="44.4509" r="1.39636" fill="white" />
        <circle cx="11.4036" cy="44.4509" r="1.39636" fill="white" />
        <circle cx="54.9236" cy="52.3636" r="1.39636" fill="white" />
        <circle cx="45.3818" cy="52.3636" r="1.39636" fill="white" />
        <circle cx="35.84" cy="52.3636" r="1.39636" fill="white" />
        <circle cx="26.2982" cy="52.3636" r="1.39636" fill="white" />
        <circle cx="16.7563" cy="52.3636" r="1.39636" fill="white" />
      </svg>
    );
  } else if (props.code === "50d" || props.code === "50n") {
    return (
      <svg
        className="fog"
        width="64"
        height="24"
        viewBox="0 0 64 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50.8165" height="2.8764" rx="1.4382" fill="white" />
        <rect width="50.8165" height="2.8764" rx="1.4382" fill="white" />
        <rect
          x="13.1835"
          y="6.95129"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="13.1835"
          y="6.95129"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          y="13.9026"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          y="13.9026"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="13.1835"
          y="20.8539"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="13.1835"
          y="20.8539"
          width="50.8165"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="55.3708"
          width="8.62921"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="55.3708"
          width="8.62921"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="0.2397"
          y="20.8539"
          width="8.62921"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
        <rect
          x="0.2397"
          y="20.8539"
          width="8.62921"
          height="2.8764"
          rx="1.4382"
          fill="white"
        />
      </svg>
    );
  }
}
