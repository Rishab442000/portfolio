import React from "react";

const Footer = () => {
  return (
    <div className="mt-[55px] lg:mt-[145px] flex justify-center items-center flex-col border-t-[1px] border-[#ABB2BF]">
      <div className="footer-div ">
        <div className="flex justify-between items-center lg:gap-[24px]">
          <div className="flex justify-between items-center flex-col lg:gap-y-[16px]">
            <div className="flex gap-[24px] lg:gap-[24px] items-start flex-col">
              <div className="footer-text">
                <svg
                  className="mr-[5px] lg:mr-[5px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  fill="none"
                  viewBox="0 0 16 17"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M12 .5H8v4H0v12h8v-4h8V.5h-4zm-8 12h4v-4h4v-4H8v4H4v4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Rishab
              </div>
              <a href="mailto:rishabe17@gmail.com" className="footer-gmail">
                rishabe17@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="media-text">Social Media</p>
          <div className="footer-media-svg flex gap-[8px] items-center">
            <a className="Git" href="https://github.com/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ABB2BF"
                  d="M15.5 6C9.699 6 5 10.588 5 16.253c0 4.537 3.006 8.369 7.18 9.727.524.09.721-.218.721-.487 0-.243-.013-1.05-.013-1.91-2.638.475-3.32-.627-3.53-1.204-.119-.295-.63-1.205-1.077-1.448-.367-.192-.892-.667-.013-.68.827-.012 1.418.744 1.614 1.051.946 1.551 2.455 1.116 3.059.846.091-.666.367-1.115.669-1.371-2.336-.256-4.777-1.14-4.777-5.062 0-1.115.406-2.038 1.076-2.756-.105-.256-.473-1.307.105-2.717 0 0 .88-.269 2.887 1.051a9.964 9.964 0 012.625-.346c.893 0 1.785.115 2.625.346 2.008-1.333 2.888-1.05 2.888-1.05.577 1.409.21 2.46.105 2.716.67.718 1.076 1.628 1.076 2.756 0 3.934-2.454 4.806-4.79 5.062.38.32.708.936.708 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.197.589.722.486a10.5 10.5 0 005.179-3.74A10.105 10.105 0 0026 16.253C26 10.588 21.301 6 15.5 6z"
                ></path>
              </svg>
            </a>
            <a
              href="https://wa.me/917092750400/?text=Hi,Rishab"
              target="_blank"
              className="message-sub-text flex items-center WhatsApp"
            >
              <svg
                className="lg:mr-[5px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ABB2BF"
                  d="M16.001 2.667c7.364 0 13.334 5.969 13.334 13.333S23.365 29.333 16 29.333a13.272 13.272 0 01-6.706-1.806l-6.622 1.806 1.803-6.624A13.27 13.27 0 012.668 16c0-7.364 5.97-13.333 13.333-13.333zm-4.544 7.066l-.266.011a1.28 1.28 0 00-.496.133 1.722 1.722 0 00-.392.304c-.16.151-.251.282-.348.408a3.64 3.64 0 00-.755 2.238c.003.653.173 1.289.44 1.884.545 1.202 1.443 2.476 2.627 3.656.285.284.565.569.866.834a12.597 12.597 0 005.12 2.728l.758.116c.246.014.493-.005.741-.017.388-.02.768-.125 1.11-.308a6.42 6.42 0 00.511-.293s.058-.038.167-.12c.18-.134.29-.228.44-.384.11-.115.207-.25.28-.403.104-.217.208-.632.25-.977.033-.264.023-.408.02-.498-.006-.142-.125-.29-.254-.353l-.776-.348s-1.16-.505-1.87-.828a.665.665 0 00-.234-.055.644.644 0 00-.504.17c-.007-.003-.096.073-1.06 1.241a.467.467 0 01-.49.173 1.91 1.91 0 01-.255-.088c-.166-.069-.223-.096-.336-.144a8.03 8.03 0 01-2.1-1.337c-.168-.147-.324-.307-.484-.461a8.396 8.396 0 01-1.36-1.691l-.079-.127a1.23 1.23 0 01-.136-.273c-.05-.196.081-.353.081-.353s.324-.355.475-.547a5.7 5.7 0 00.35-.497c.158-.254.207-.514.125-.715-.374-.912-.76-1.82-1.158-2.721-.078-.179-.312-.307-.524-.332a5.91 5.91 0 00-.216-.022 4.512 4.512 0 00-.537.006l.268-.011.001.001z"
                ></path>
              </svg>
            </a>
            <a
              className="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/rishab-e-519282196/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ABB2BF"
                  d="M25.333 4A2.667 2.667 0 0128 6.667v18.666A2.667 2.667 0 0125.333 28H6.667A2.667 2.667 0 014 25.333V6.667A2.667 2.667 0 016.667 4h18.666zm-.666 20.667V17.6a4.347 4.347 0 00-4.347-4.347c-1.133 0-2.453.694-3.093 1.734v-1.48h-3.72v11.16h3.72v-6.574a1.86 1.86 0 011.853-1.866 1.866 1.866 0 011.867 1.866v6.574h3.72zM9.173 11.413a2.24 2.24 0 002.24-2.24c0-1.24-1-2.253-2.24-2.253A2.253 2.253 0 006.92 9.173c0 1.24 1.013 2.24 2.253 2.24zm1.854 13.254v-11.16H7.333v11.16h3.694z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="copyRight">{`© Copyright ${new Date().getFullYear()}. Made by Rishab`}</p>
    </div>
  );
};

export default Footer;
