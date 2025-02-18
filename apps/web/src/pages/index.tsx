import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import YouTube, { YouTubeProps } from 'react-youtube'

export default function Home() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    // height: '525',
    // width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      color: 'white',
      controls: 0,
      modestbranding: 1,
      rel: 0
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 max-w-screen overflow-hidden">
      <Head>
        <title>Outstatic - A Static Site CMS for Next.js</title>
        <meta
          property="og:description"
          content="An open source static site CMS for Next.js. Create your blog or website in minutes. No dabatase needed."
        />
        <meta
          name="description"
          content="An open source static site CMS for Next.js. Create your blog or website in minutes. No dabatase needed."
        />
      </Head>
      <nav className="flex justify-between items-center w-full md:max-w-5xl p-4 md:p-6 opacity-0 animate-fade-in-up animation-delay-[1000ms] animation-duration-[300ms]">
        <Image
          src="/images/outstatic-logo.svg"
          width={105.2}
          height={32}
          alt="Outstatic Logo"
        />
        <div className="gap-2 flex items-center">
          <Link
            href="https://github.com/avitorio/outstatic#stay-up-to-date"
            aria-label="GitHub"
            rel="noreferrer"
          >
            <a
              target="_blank"
              className="text-white bg-gray-800 hover:bg-gray-900 border focus:ring-2 focus:ring-gray-300 focus:outline-none py-2 px-3 text-xs font-medium text-center rounded-lg"
            >
              <p>Stay up-to-date!</p>
            </a>
          </Link>
          <a
            href="https://github.com/avitorio/outstatic"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
            >
              <title>GitHub</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(1.5)"
                fill="#1B1F23"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/outstatic"
            target="_blank"
            aria-label="Twitter"
            rel="noreferrer"
          >
            <title>Twitter</title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 248 204"
              width="26"
              height="26"
              fill="none"
            >
              <path
                fill="#000"
                d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center text-slate-800 mt-5 md:mt-20">
        <section className="flex w-full flex-1 px-4 flex-col items-center justify-center text-center text-slate-800 mt-20 md:mt-0">
          <div className="flex items-center space-between z-10 relative">
            <div className="top-2 max-w-xs w-64 ml-10 absolute hidden -left-[360px] lg:block opacity-0 animate-fade-in-up">
              <Image
                src="/images/writer.png"
                width="256"
                height="236"
                alt="A girl writing on a notebook"
              />
            </div>
            <div className="md:pt-8 opacity-0 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl text-slate-800">
                <div className="block min-w-[270px] md:min-w-[420px]">
                  <Image
                    src="/images/outstatic-logo.svg"
                    width={420}
                    height={96}
                    alt="Outstatic"
                    layout="responsive"
                  />
                </div>
              </h1>
              <p className="mt-3 text-xl text-slate-800">
                A static CMS for Next.js
              </p>
            </div>
          </div>
          <div className="mt-16 w-full md:max-w-4xl mb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-16">
              <div className="p-3 md:p-6 border border-x-4 border-y-4 border-black rounded-cartoon rotate-1 opacity-0 animate-fade-in-up animation-delay-[300ms]">
                <p className="text-xl font-bold text-slate-800 lg:text-3xl -rotate-1">
                  Open source
                </p>
              </div>
              <div className="p-3 md:p-6 border border-x-4 border-y-4 border-black rounded-cartoon2 -rotate-[0.5deg] opacity-0 animate-fade-in-up animation-delay-[400ms]">
                <p className="text-xl font-bold text-slate-800 lg:text-3xl rotate-[0.5deg]">
                  Host for free
                </p>
              </div>
              <div className="p-2 md:p-6 border border-t-[3px] border-b-[5px] border-x-4 border-black rounded-cartoon2 md:rounded-cartoon md:rotate-1 opacity-0 animate-fade-in-up animation-delay-[500ms]">
                <p className="text-xl font-bold text-slate-800 lg:text-3xl -rotate-1">
                  Own your data
                </p>
              </div>
              <div className="p-3 md:p-6 border border-x-4 border-t-[3px] border-b-[5px] border-black rounded-cartoon2 -rotate-[0.5deg] opacity-0 animate-fade-in-up animation-delay-[600ms]">
                <p className="text-xl font-bold text-slate-800 lg:text-3xl  rotate-[0.5deg]">
                  No database
                </p>
              </div>
              <div className="p-3 md:p-6 border border-t-[2px] border-b-[5px] border-x-4 border-black rounded-cartoon rotate-1 opacity-0 animate-fade-in-up animation-delay-[700ms]">
                <p className="text-xl font-bold text-slate-800 lg:text-3xl -rotate-1">
                  5-min setup
                </p>
              </div>
              <div className="p-3 md:p-6 border border-x-4 border-y-4 border-black rounded-cartoon2 -rotate-[0.5deg] relative opacity-0 animate-fade-in-up animation-delay-[800ms]">
                <svg
                  viewBox="0 0 1081 447"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[500px] lg:w-[700px] lg:max-w-[700px] absolute left-[calc(50%-75px)] md:left-[12%] -bottom-4 md:-bottom-[5%] lg:-bottom-4"
                >
                  <g>
                    <path
                      d="M106.866 391.331C101.368 391.331 97.3638 389.299 94.8538 385.235C92.3438 381.052 91.0888 376.151 91.0888 370.534C91.0888 365.275 92.045 359.956 93.9574 354.578C95.8697 349.199 98.559 344.717 102.025 341.131C105.491 337.546 109.436 335.753 113.858 335.753C114.695 335.753 115.232 335.872 115.471 336.111C116.786 334.677 118.22 333.542 119.774 332.705C121.448 331.749 123.24 331.271 125.153 331.271C129.336 331.271 132.264 332.765 133.938 335.753C135.611 338.621 136.448 342.207 136.448 346.51C136.448 350.693 135.79 355.175 134.475 359.956C133.161 364.737 131.487 369.159 129.456 373.223C127.424 377.287 125.272 380.454 123.001 382.725C123.599 382.845 124.197 382.964 124.794 383.084C125.392 383.084 125.989 383.084 126.587 383.084C130.89 383.084 134.834 381.948 138.42 379.677C142.005 377.287 145.292 374.418 148.28 371.072C151.268 367.725 154.017 364.438 156.527 361.211C156.886 360.852 157.185 360.673 157.424 360.673C157.902 360.673 158.201 360.912 158.32 361.39C158.44 361.868 158.32 362.406 157.962 363.004C156.886 364.319 155.332 366.231 153.3 368.741C151.268 371.251 148.818 373.821 145.95 376.45C143.081 379.08 139.974 381.291 136.627 383.084C133.28 384.876 129.814 385.773 126.228 385.773C125.272 385.773 124.376 385.713 123.539 385.594C122.703 385.355 121.806 385.116 120.85 384.876C118.938 386.789 116.786 388.343 114.396 389.538C112.125 390.733 109.615 391.331 106.866 391.331ZM119.953 381.649C122.583 378.781 124.734 375.374 126.408 371.43C128.081 367.486 129.336 363.422 130.173 359.239C131.129 355.056 131.607 351.171 131.607 347.585C131.607 343.402 131.009 339.996 129.814 337.366C128.738 334.737 127.065 333.721 124.794 334.318C121.806 335.036 119.236 336.769 117.085 339.518C114.934 342.267 113.26 345.554 112.065 349.378C110.989 353.203 110.451 357.087 110.451 361.032C110.451 365.454 111.169 369.578 112.603 373.402C114.157 377.227 116.607 379.976 119.953 381.649ZM107.762 388.283C109.794 388.283 111.647 387.805 113.32 386.849C114.993 385.892 116.547 384.817 117.981 383.621C114.515 381.59 111.945 378.362 110.272 373.94C108.718 369.518 107.941 364.856 107.941 359.956C107.941 356.251 108.36 352.605 109.196 349.02C110.153 345.434 111.408 342.267 112.961 339.518H112.424C110.511 339.518 108.599 340.534 106.687 342.566C104.894 344.597 103.28 347.287 101.846 350.633C100.412 353.86 99.2164 357.386 98.2602 361.211C97.4235 364.916 97.0052 368.562 97.0052 372.147C97.0052 376.57 97.8419 380.394 99.5152 383.621C101.188 386.729 103.937 388.283 107.762 388.283Z"
                      fill="#1E293B"
                      className="path"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M165.901 390.076C163.63 390.076 161.657 389.179 159.984 387.386C158.311 385.474 157.474 382.725 157.474 379.139C157.474 377.466 157.713 375.554 158.191 373.402C158.669 371.251 159.506 368.92 160.701 366.41C163.45 360.434 165.482 356.131 166.797 353.502C168.112 350.753 168.948 349.02 169.307 348.303C169.665 347.585 169.725 347.287 169.486 347.406C169.247 347.526 168.351 348.661 166.797 350.813C165.363 352.844 163.689 355.235 161.777 357.984C159.984 360.613 158.251 362.884 156.578 364.797C156.219 365.275 155.801 365.514 155.323 365.514C154.845 365.514 154.606 365.275 154.606 364.797C154.606 364.319 154.845 363.781 155.323 363.183C158.669 358.163 161.478 353.98 163.749 350.633C166.02 347.167 168.291 343.581 170.562 339.876C171.757 337.844 173.191 336.888 174.865 337.008C176.538 337.008 178.331 337.008 180.243 337.008C179.765 337.844 178.809 339.936 177.375 343.283C175.94 346.51 174.387 350.155 172.713 354.219C171.04 358.163 169.486 361.629 168.052 364.617C166.498 368.203 165.243 371.49 164.287 374.478C163.331 377.466 162.853 380.036 162.853 382.187C162.853 385.534 164.108 387.446 166.618 387.924C168.171 388.283 169.964 387.566 171.996 385.773C174.148 383.98 176.299 381.59 178.45 378.602C180.721 375.494 182.873 372.088 184.905 368.382C187.056 364.677 188.909 361.092 190.462 357.625C191.897 354.398 193.271 351.171 194.586 347.944C195.901 344.597 197.036 341.789 197.992 339.518C198.59 338.203 200.084 337.486 202.474 337.366C204.865 337.127 206.837 337.008 208.391 337.008C207.315 338.083 205.881 340.295 204.088 343.641C202.295 346.988 200.502 350.872 198.709 355.295C196.917 359.717 195.423 364.139 194.227 368.562C193.032 372.864 192.434 376.629 192.434 379.857C192.434 384.637 194.048 387.028 197.275 387.028C197.873 387.028 198.47 386.968 199.068 386.849C199.785 386.729 200.562 386.49 201.399 386.131C204.865 384.697 208.391 382.366 211.976 379.139C215.562 375.912 218.909 372.327 222.016 368.382C225.243 364.438 227.933 360.793 230.084 357.446C230.801 356.251 231.459 355.653 232.056 355.653C232.415 355.653 232.594 355.952 232.594 356.55C232.594 357.386 232.295 358.283 231.698 359.239C229.546 362.586 226.797 366.231 223.451 370.175C220.223 374.119 216.757 377.765 213.052 381.112C209.347 384.458 205.701 386.908 202.116 388.462C199.606 389.538 197.454 390.076 195.662 390.076C192.434 390.076 190.044 388.701 188.49 385.952C187.056 383.203 186.339 380.036 186.339 376.45C186.339 373.104 186.757 370.115 187.594 367.486C184.606 373.462 181.259 378.721 177.554 383.263C173.968 387.805 170.084 390.076 165.901 390.076Z"
                      fill="#1E293B"
                    />
                    <path
                      d="M252.039 389.359C249.529 389.359 247.497 388.582 245.944 387.028C244.39 385.474 243.613 383.263 243.613 380.394C243.613 379.797 243.613 379.199 243.613 378.602C243.732 377.884 243.852 377.227 243.972 376.629C245.167 371.729 246.84 367.665 248.991 364.438C251.143 361.211 253.294 357.267 255.446 352.605C256.043 351.53 256.402 350.574 256.521 349.737C256.76 348.781 256.88 347.944 256.88 347.227C256.88 345.315 256.043 344.06 254.37 343.462C252.816 342.864 250.784 342.506 248.274 342.386C245.884 342.147 243.374 341.729 240.744 341.131C240.266 342.566 239.25 345.076 237.697 348.661C236.262 352.127 234.649 355.175 232.856 357.805C231.063 360.673 229.151 363.303 227.119 365.693C225.087 368.084 223.593 369.817 222.637 370.892C221.561 371.968 220.844 372.506 220.485 372.506C220.127 372.506 219.948 372.267 219.948 371.789C219.948 371.311 220.545 370.354 221.74 368.92C222.457 368.203 223.772 366.59 225.685 364.08C227.597 361.57 229.39 359 231.063 356.37C232.856 353.621 234.41 350.633 235.724 347.406C237.039 344.179 237.936 341.968 238.414 340.773C235.784 340.056 233.752 338.263 232.318 335.394C230.884 332.406 230.167 329.358 230.167 326.251C230.167 322.785 230.944 319.976 232.497 317.824C234.171 315.673 235.844 314.597 237.517 314.597C238.952 314.597 240.207 315.494 241.282 317.287C242.477 319.079 243.075 322.127 243.075 326.43C243.075 328.581 242.896 330.733 242.537 332.884C242.179 335.036 241.82 336.828 241.462 338.263C244.689 338.86 248.035 339.159 251.501 339.159C254.968 339.04 257.836 339.338 260.107 340.056C262.498 340.653 263.693 342.386 263.693 345.255C263.693 347.526 262.677 350.693 260.645 354.757C258.493 359.179 256.282 363.542 254.011 367.845C251.74 372.147 250.007 376.45 248.812 380.753C248.693 381.231 248.573 381.709 248.454 382.187C248.454 382.546 248.454 382.964 248.454 383.442C248.454 386.072 249.888 387.386 252.756 387.386C253.832 387.386 255.266 387.088 257.059 386.49C260.525 385.056 264.051 382.665 267.637 379.319C271.342 375.853 274.808 372.147 278.035 368.203C281.382 364.259 284.071 360.673 286.103 357.446C286.94 356.251 287.657 355.653 288.255 355.653C288.613 355.653 288.792 355.892 288.792 356.37C288.792 356.848 288.434 357.745 287.717 359.06C285.685 362.406 282.996 366.052 279.649 369.996C276.302 373.821 272.717 377.406 268.892 380.753C265.067 384.1 261.422 386.55 257.956 388.104C255.924 388.94 253.952 389.359 252.039 389.359ZM238.952 337.904C239.071 337.307 239.25 335.992 239.489 333.96C239.728 331.928 239.848 329.777 239.848 327.506C239.848 324.637 239.549 322.546 238.952 321.231C238.354 319.916 237.697 319.259 236.979 319.259C236.143 319.259 235.366 319.976 234.649 321.41C234.051 322.844 233.812 324.816 233.932 327.326C234.171 331.629 234.888 334.438 236.083 335.753C237.278 336.948 238.234 337.665 238.952 337.904Z"
                      fill="#1E293B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.0516 446.572C8.06359 446.572 5.61338 445.855 3.70102 444.421C1.66914 443.106 0.653198 441.134 0.653198 438.504C0.653198 436.831 1.13129 434.979 2.08747 432.947C2.92412 430.915 4.35839 428.704 6.39028 426.313C9.7369 422.369 14.0397 418.664 19.2987 415.198C24.6772 411.851 30.235 408.624 35.9721 405.516C41.7091 402.528 46.7888 399.66 51.2112 396.911C52.1674 392.01 53.2431 387.289 54.4383 382.747C55.753 378.086 57.008 373.544 58.2032 369.122C56.5299 372.588 54.498 376.054 52.1076 379.52C49.8367 382.867 47.2669 385.676 44.3984 387.947C41.6494 390.098 38.6016 391.174 35.2549 391.174C32.5059 391.174 30.2948 390.038 28.6214 387.767C27.0676 385.496 26.2908 382.568 26.2908 378.982C26.2908 375.158 27.2469 371.094 29.1593 366.791C30.474 363.923 31.8485 361.054 33.2828 358.185C34.7171 355.197 35.9123 352.687 36.8685 350.656C37.0212 350.331 37.2621 349.823 37.5581 349.198C39.1159 345.91 42.2009 339.4 42 339.5C43.7721 337.285 46.1636 337.338 48.0159 337.378C48.254 337.383 48.4833 337.389 48.7012 337.389C48.2231 338.942 47.2669 341.393 45.8327 344.739C44.5179 347.966 43.0239 351.492 41.3506 355.317C39.7968 359.022 38.3625 362.369 37.0478 365.357C35.494 369.062 34.239 372.528 33.2828 375.755C32.3266 378.863 31.8485 381.492 31.8485 383.644C31.8485 387.349 33.2828 389.201 36.1514 389.201C38.4223 389.201 41.0518 387.827 44.0398 385.078C47.0279 382.329 49.8964 378.803 52.6454 374.5C55.3945 370.078 57.6056 365.596 59.2789 361.054C59.518 360.576 59.9363 359.44 60.5339 357.648C61.1315 355.735 61.7889 353.703 62.506 351.552C63.2232 349.281 63.8805 347.189 64.4782 345.277C65.0758 343.365 65.4343 342.169 65.5539 341.691C66.7491 339.659 68.1833 338.464 69.8567 338.106C71.53 337.628 73.3228 337.389 75.2352 337.389C74.1595 338.942 72.8447 341.751 71.2909 345.815C69.7371 349.879 68.0638 354.66 66.271 360.158C64.5977 365.656 62.9841 371.393 61.4303 377.369C59.8765 383.225 58.5618 388.843 57.4861 394.221C63.9403 389.919 69.2591 385.855 73.4423 382.03C77.6256 378.205 81.2711 374.381 84.3786 370.556C87.4862 366.612 90.5938 362.428 93.7014 358.006C94.0599 357.528 94.4783 357.289 94.9564 357.289C95.554 357.289 95.8528 357.648 95.8528 358.365C95.8528 358.962 95.6137 359.56 95.1357 360.158C92.5062 363.743 89.5181 367.628 86.1715 371.811C82.8248 375.875 78.7611 380.178 73.9802 384.719C69.3188 389.142 63.522 393.684 56.5897 398.345C54.6773 407.668 51.5697 415.377 47.2669 421.473C42.9641 427.688 38.3625 432.588 33.4621 436.174C28.6812 439.879 24.4382 442.568 20.733 444.242C17.5059 445.795 14.2788 446.572 11.0516 446.572ZM10.0358 443.502C13.3825 443.502 16.6096 442.546 19.7171 440.634C26.0518 436.809 31.7291 431.61 36.7491 425.036C41.769 418.582 46.0718 410.335 49.6575 400.295C45.4742 402.685 40.8128 405.255 35.6734 408.004C30.6534 410.873 25.8128 413.861 21.1514 416.968C16.49 420.195 12.6653 423.721 9.67726 427.546C7.64538 430.056 6.21111 432.207 5.37445 434C4.41828 435.912 3.94019 437.526 3.94019 438.841C3.94019 440.395 4.5378 441.53 5.73302 442.247C6.92825 443.084 8.36251 443.502 10.0358 443.502Z"
                      fill="#1E293B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M275.406 387.789C277.677 389.701 281.263 390.658 286.163 390.658C297.159 390.658 305.407 386.773 310.905 379.004L312.697 376.136C313.654 374.223 314.311 372.311 314.669 370.399C315.148 368.367 315.387 366.335 315.387 364.303C315.387 360.12 314.43 356.415 312.518 353.187C310.606 349.841 308.454 346.972 306.064 344.582C303.673 342.072 301.821 339.92 300.506 338.128C300.984 337.171 301.701 335.498 302.657 333.108C303.733 330.717 304.51 328.626 304.988 326.833C305.227 325.637 305.407 324.562 305.526 323.606C305.646 322.649 305.705 321.753 305.705 320.916C305.705 316.972 304.45 315 301.94 315C300.028 315 297.996 316.315 295.845 318.944C293.813 321.454 292.797 324.741 292.797 328.805C292.797 331.076 293.215 333.347 294.052 335.618C294.889 337.769 295.845 339.502 296.92 340.817C296.442 341.653 295.546 343.148 294.231 345.299C293.036 347.331 291.482 349.781 289.57 352.65C287.896 355.279 286.044 357.909 284.012 360.538C282.1 363.168 280.845 364.841 280.247 365.558C279.769 366.156 279.351 366.753 278.992 367.351C278.633 367.829 278.454 368.187 278.454 368.427C278.454 368.905 278.693 369.144 279.171 369.144C279.53 369.144 280.247 368.606 281.323 367.53C282.279 366.454 283.773 364.602 285.805 361.972C287.956 359.223 289.869 356.534 291.542 353.905C292.857 351.873 294.171 349.781 295.486 347.63C296.92 345.359 297.936 343.626 298.534 342.43C299.729 343.626 301.104 345.359 302.657 347.63C304.331 349.781 305.825 352.291 307.14 355.16C308.454 357.909 309.112 360.837 309.112 363.944C309.112 366.335 308.813 368.725 308.215 371.116C307.737 373.506 306.901 375.717 305.705 377.749C305.227 377.869 304.63 377.929 303.912 377.929H302.12C298.414 377.929 294.47 377.63 290.287 377.032C286.223 376.315 282.458 375.956 278.992 375.956C276.721 375.956 274.988 376.554 273.793 377.749C272.598 378.825 272 380.199 272 381.873C272 383.905 273.135 385.877 275.406 387.789ZM300.621 332.626C299.904 334.538 299.426 335.793 299.187 336.391C298.47 335.434 297.813 334.239 297.215 332.805C296.617 331.371 296.318 329.757 296.318 327.964C296.318 325.215 296.856 323.064 297.932 321.51C299.127 319.837 300.203 319 301.159 319C302.354 319 302.952 320.135 302.952 322.406C302.952 323.482 302.773 324.916 302.414 326.709C301.936 328.741 301.338 330.713 300.621 332.626ZM286.625 388.74C290.45 388.62 293.796 387.784 296.665 386.23C299.653 384.676 302.103 382.584 304.015 379.955C300.43 380.074 296.844 379.895 293.258 379.417C289.673 378.939 286.147 378.7 282.681 378.7C281.127 378.7 279.812 379.059 278.736 379.776C277.541 380.493 276.943 381.329 276.943 382.286C276.943 384.078 277.9 385.572 279.812 386.768C281.724 388.082 283.995 388.74 286.625 388.74Z"
                      fill="#1E293B"
                    />
                    <path
                      d="M303.955 379.199C343.231 379.199 382.427 382.185 421.749 382.185C444.81 382.185 468.159 383.345 491.098 380.692C515.253 377.898 542.494 374.231 564.594 363.437C580.054 355.888 593.713 346.817 604.08 332.994C612.237 322.119 613.039 311.446 613.039 298.07C613.039 274.101 593.462 255.349 575.212 242.077C553.588 226.35 527.765 223.495 503.209 232.122C480.06 240.256 456.949 256.341 468.535 283.968C484.148 321.199 547.26 299.047 571.563 291.351C626.31 274.014 677.762 244.911 725.939 214.205C781.842 178.574 832.567 135.657 887.946 99.3143C948.937 59.2888 1013.1 27.4691 1080.4 -0.0637207"
                      stroke="#1E293B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="2000"
                      className="md:animate-write"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <Link href="/docs/getting-started">
                <a
                  type="button"
                  className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-6 py-3.5 mr-2 mb-2 animate-nudge animation-delay-[2s] cursor-pointer"
                >
                  Get started
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full mb-20 md:px-0">
          <div className="px-4 flex flex-col items-center mb-10">
            <div className="block min-w-[320px] md:min-w-[700px]">
              <Image
                src="/images/write-publish-live.svg"
                width={700}
                height={96}
                layout="responsive"
                alt="Write, Publish, It's live!"
              />
            </div>
            <p className="mt-2 text-xl text-slate-800 mb-8">
              Get a complete dashboard to manage your Next.js static website.{' '}
              <br />
              Check out our demo below, or{' '}
              <Link href="/docs/getting-started">
                <a className="underline font-semibold">get&nbsp;started</a>
              </Link>
              .
            </p>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center">
            <div className="w-full absolute pointer-events-none">
              <Image
                src="/images/line-bg-home.svg"
                width="100%"
                height="100%"
                layout="responsive"
                alt="Line background"
              />
            </div>
            <div className="w-full absolute pointer-events-none left-[550px] top-60 hidden xl:block">
              <Image
                src="/images/boy-laptop.png"
                width={250}
                height={250}
                alt="boy with laptop"
              />
            </div>
            <div className="relative z-10 border border-t-[3px] border-b-[5px] border-x-4 border-black rounded-cartoon2 md:rounded-cartoon overflow-hidden max-w-[700px] bg-white">
              <YouTube
                videoId="K-YXF-dBKPI"
                opts={opts}
                onReady={onPlayerReady}
                className="relative pb-[56.25%] max-w-xs w-80 h-60 md:w-[700px] md:h-[525px] md:max-w-3xl"
                iframeClassName="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 min-w-[270px] md:min-w-[700px] px-4">
              <span className="text-2xl">Powered by:</span>
              <div className="flex justify-center items-center gap-6 md:gap-10">
                <Image
                  src="/images/nextjs-logo.svg"
                  width={100}
                  height={96}
                  alt="Vercel"
                />
                <Image
                  src="/images/vercel-logo.svg"
                  width={100}
                  height={96}
                  alt="Vercel"
                />
                <Image
                  src="/images/github-logo.svg"
                  width={100}
                  height={96}
                  alt="Vercel"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t text-slate-800">
        Created by&nbsp;
        <a
          className="hover:underline font-semibold text-slate-800"
          href="https://twitter.com/andrevitorio"
          target="_blank"
          rel="noreferrer"
        >
          Andre Vitorio
        </a>
        , design by&nbsp;
        <a
          className="hover:underline font-semibold text-slate-800"
          href="https://pacy.co"
          target="_blank"
          rel="noreferrer"
        >
          Pacy
        </a>
        .
      </footer>
    </div>
  )
}
