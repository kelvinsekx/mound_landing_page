import * as React from "react";
import { Container } from "../container";
import Link from "next/link";
import styles from "./footer.module.css"

const data = [
  {
    title: "Company",
    items: ["Contact us"],
  },
  // {
  //   title: "Legal",
  //   items: ["Terms of Service", "Privacy policy"],
  // },
  {
    title: "Links",
    items: ["Home", "About us", "Creators", "Angels"],
  },
];

const Footer = () => {
  return (
    <footer className={"bg-moundUpBlack text-moundUpWhite " + styles.footer}>
      <Container>
        <div className="grid gap-10 grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] text-base py-10 px-4">
          {data.map((menu, index) => (
            <Footer.UL key={index} {...menu} />
          ))}
          <section>
            <header className="font-extrabold">Community</header>
            <ul>
              <li>
                <a
                  className="flex gap-1 items-center"
                  href="https://t.me/+7s2RjGFlLeRiMzY0 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.374 4.81448L20.0732 20.3809C19.8242 21.4795 19.1748 21.753 18.2519 21.2354L13.2227 17.5293L10.7959 19.8633C10.5273 20.1319 10.3027 20.3565 9.78515 20.3565L10.1465 15.2344L19.4678 6.81155C19.873 6.45022 19.3799 6.25003 18.8379 6.61136L7.31445 13.8672L2.35351 12.3145C1.27441 11.9776 1.25488 11.2354 2.57812 10.7178L21.9824 3.24222C22.8809 2.9053 23.667 3.44241 23.374 4.81448Z"
                      fill="#FFFDFA"
                    />
                  </svg>
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/JRLJZuByl6cD2RmYGny41R"
                  className="flex gap-1 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    x="0px"
                    y="0px"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                      fill="#FFFDFA"
                    ></path>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="text-center py-10">
          {/* <InlineIcons /> */}
          <p className="pt-[18px]">
            2021 MoundUp Africa inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

const UL = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <section>
      <header className="font-extrabold">{title}</header>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {title === "Company" && item === "Contact us" ? (
              <a href="mailto:info@moundup.africa">{item}</a>
            ) : (
              <Link
                href={(function () {
                  const i = item.toLowerCase();
                  if (i === "creators" || i === "angels") {
                    return "/waitlist";
                  } else if (i === "about us") {
                    return "#about";
                  } else {
                    return "/";
                  }
                })()}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

Footer.UL = UL;

const InlineIcons = () => (
  <span className="flex justify-center gap-2">
    <svg
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9809 16.875L22.8141 11.4457H17.6045V7.92246C17.6045 6.43711 18.3322 4.98926 20.6654 4.98926H23.0338V0.366797C23.0338 0.366797 20.8846 0 18.8297 0C14.5395 0 11.7352 2.60039 11.7352 7.30781V11.4457H6.96621V16.875H11.7352V30H17.6045V16.875H21.9809Z"
        fill="#FFFDFA"
      />
    </svg>

    <svg
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="instagram">
        <path
          id="Vector"
          d="M15.0059 8.26172C11.2793 8.26172 8.27344 11.2676 8.27344 14.9941C8.27344 18.7207 11.2793 21.7266 15.0059 21.7266C18.7324 21.7266 21.7383 18.7207 21.7383 14.9941C21.7383 11.2676 18.7324 8.26172 15.0059 8.26172ZM15.0059 19.3711C12.5977 19.3711 10.6289 17.4082 10.6289 14.9941C10.6289 12.5801 12.5918 10.6172 15.0059 10.6172C17.4199 10.6172 19.3828 12.5801 19.3828 14.9941C19.3828 17.4082 17.4141 19.3711 15.0059 19.3711ZM23.584 7.98633C23.584 8.85938 22.8809 9.55664 22.0137 9.55664C21.1406 9.55664 20.4434 8.85352 20.4434 7.98633C20.4434 7.11914 21.1465 6.41602 22.0137 6.41602C22.8809 6.41602 23.584 7.11914 23.584 7.98633ZM28.043 9.58008C27.9434 7.47656 27.4629 5.61328 25.9219 4.07812C24.3867 2.54297 22.5234 2.0625 20.4199 1.95703C18.252 1.83398 11.7539 1.83398 9.58594 1.95703C7.48828 2.05664 5.625 2.53711 4.08398 4.07227C2.54297 5.60742 2.06836 7.4707 1.96289 9.57422C1.83984 11.7422 1.83984 18.2402 1.96289 20.4082C2.0625 22.5117 2.54297 24.375 4.08398 25.9102C5.625 27.4453 7.48242 27.9258 9.58594 28.0312C11.7539 28.1543 18.252 28.1543 20.4199 28.0312C22.5234 27.9316 24.3867 27.4512 25.9219 25.9102C27.457 24.375 27.9375 22.5117 28.043 20.4082C28.166 18.2402 28.166 11.748 28.043 9.58008ZM25.2422 22.7344C24.7852 23.8828 23.9004 24.7676 22.7461 25.2305C21.0176 25.916 16.916 25.7578 15.0059 25.7578C13.0957 25.7578 8.98828 25.9102 7.26562 25.2305C6.11719 24.7734 5.23242 23.8887 4.76953 22.7344C4.08398 21.0059 4.24219 16.9043 4.24219 14.9941C4.24219 13.084 4.08984 8.97656 4.76953 7.25391C5.22656 6.10547 6.11133 5.2207 7.26562 4.75781C8.99414 4.07227 13.0957 4.23047 15.0059 4.23047C16.916 4.23047 21.0234 4.07812 22.7461 4.75781C23.8945 5.21484 24.7793 6.09961 25.2422 7.25391C25.9277 8.98242 25.7695 13.084 25.7695 14.9941C25.7695 16.9043 25.9277 21.0117 25.2422 22.7344Z"
          fill="#FFFDFA"
        />
      </g>
    </svg>

    <svg
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="envelope">
        <path
          id="Vector"
          d="M29.4316 11.1797C29.6602 10.998 30 11.168 30 11.4551V23.4375C30 24.9902 28.7402 26.25 27.1875 26.25H2.8125C1.25977 26.25 0 24.9902 0 23.4375V11.4609C0 11.168 0.333984 11.0039 0.568359 11.1855C1.88086 12.2051 3.62109 13.5 9.59766 17.8418C10.834 18.7441 12.9199 20.6426 15 20.6309C17.0918 20.6484 19.2188 18.709 20.4082 17.8418C26.3848 13.5 28.1191 12.1992 29.4316 11.1797ZM15 18.75C16.3594 18.7734 18.3164 17.0391 19.3008 16.3242C27.0762 10.6816 27.668 10.1895 29.4609 8.7832C29.8008 8.51953 30 8.10938 30 7.67578V6.5625C30 5.00977 28.7402 3.75 27.1875 3.75H2.8125C1.25977 3.75 0 5.00977 0 6.5625V7.67578C0 8.10938 0.199219 8.51367 0.539062 8.7832C2.33203 10.1836 2.92383 10.6816 10.6992 16.3242C11.6836 17.0391 13.6406 18.7734 15 18.75Z"
          fill="#FFFDFA"
        />
      </g>
    </svg>

    <svg width="1.3rem" height="1.3rem" viewBox="0 0 30 30" fill="none">
      <g id="linkedin-in">
        <path
          id="Vector"
          d="M7.75078 26.2499H2.30859V8.72451H7.75078V26.2499ZM5.02676 6.33389C3.28652 6.33389 1.875 4.89248 1.875 3.15225C1.875 2.31635 2.20706 1.51469 2.79813 0.923617C3.3892 0.332547 4.19086 0.000488281 5.02676 0.000488281C5.86266 0.000488281 6.66432 0.332547 7.25539 0.923617C7.84646 1.51469 8.17852 2.31635 8.17852 3.15225C8.17852 4.89248 6.76641 6.33389 5.02676 6.33389ZM28.1191 26.2499H22.6887V17.7187C22.6887 15.6854 22.6477 13.078 19.8592 13.078C17.0297 13.078 16.5961 15.287 16.5961 17.5722V26.2499H11.1598V8.72451H16.3793V11.1151H16.4555C17.182 9.73818 18.9568 8.28506 21.6047 8.28506C27.1125 8.28506 28.125 11.912 28.125 16.6229V26.2499H28.1191Z"
          fill="#FFFDFA"
        />
      </g>
    </svg>
    <svg
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="twitter">
        <path
          id="Vector"
          d="M26.9162 8.88969C26.9353 9.15617 26.9353 9.42271 26.9353 9.6892C26.9353 17.8173 20.7487 27.1828 9.44162 27.1828C5.9581 27.1828 2.72209 26.1739 0 24.4227C0.494941 24.4798 0.970781 24.4988 1.48477 24.4988C4.35908 24.4988 7.00506 23.528 9.11801 21.872C6.41496 21.8148 4.14973 20.0445 3.36926 17.608C3.75 17.665 4.13068 17.7031 4.53047 17.7031C5.08248 17.7031 5.63455 17.627 6.14848 17.4938C3.33123 16.9227 1.21822 14.4481 1.21822 11.4595V11.3834C2.03672 11.8402 2.98857 12.1258 3.99738 12.1638C2.34129 11.0597 1.25631 9.17522 1.25631 7.04322C1.25631 5.90111 1.56082 4.85416 2.09385 3.94045C5.12051 7.67141 9.67002 10.1079 14.7715 10.3745C14.6763 9.9176 14.6192 9.44176 14.6192 8.96586C14.6192 5.5775 17.3603 2.81738 20.7677 2.81738C22.538 2.81738 24.1369 3.55977 25.2601 4.759C26.6496 4.49252 27.9821 3.97854 29.1623 3.27424C28.7054 4.70193 27.7346 5.90117 26.4593 6.66254C27.6966 6.52936 28.8959 6.18664 29.9999 5.7108C29.1625 6.92902 28.1154 8.014 26.9162 8.88969Z"
          fill="#FFFDFA"
        />
      </g>
    </svg>
  </span>
);

export default Footer;
