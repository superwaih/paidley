import { useRouter } from "next/router";


export function notificationIcon() {

  const router = useRouter()
  const path = router.pathname
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.52992 13.394C1.31727 14.7471 2.268 15.6862 3.43205 16.1542C7.89481 17.9486 14.1052 17.9486 18.5679 16.1542C19.732 15.6862 20.6827 14.7471 20.4701 13.394C20.3394 12.5625 19.6932 11.8701 19.2144 11.194C18.5873 10.2975 18.525 9.31971 18.5249 8.27941C18.5249 4.2591 15.1559 1 11 1C6.84413 1 3.47513 4.2591 3.47513 8.27941C3.47503 9.31971 3.41272 10.2975 2.78561 11.194C2.30684 11.8701 1.66061 12.5625 1.52992 13.394Z"
        stroke={path.includes("notification") ? "#306BB2" : "#CDDBEC"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20C8.79613 20.6219 9.84747 21 11 21C12.1525 21 13.2039 20.6219 14 20"
        stroke={path.includes("notification") ? "#306BB2" : "#CDDBEC"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
