function MyTechStack() {
  const technologies = [
    {
      name: "HTML",
      href: "https://en.wikipedia.org/wiki/HTML",
      svg: "icon-[ri--javascript-fill]",
    },
    {
      name: "CSS",
      href: "https://en.wikipedia.org/wiki/CSS",
      svg: "icon-[ri--css3-fill]",
    },
    {
      name: "JavaScript",
      href: "https://en.wikipedia.org/wiki/JavaScript",
      svg: "icon-[ri--javascript-fill]",
    },
    { name: "React", href: "", svg: "icon-[ri--reactjs-fill]" },
  ];

  return (
    <div className="h-min-[20vh] mx-auto grid w-full h-auto space-y-4 space-x-4 grid-cols-2 justify-between py-10 sm:mx-0 sm:flex sm:w-[30vw] sm:flex-row sm:flex-wrap">
      {technologies.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className="flex flex-col justify-between items-center align-middle text-center"
        >
          <span class={item.svg}></span>
          <p className="text-sm text-center">{item.name}</p>
        </a>
      ))}
    </div>
  );
}

/*

        <p className="text-sm text-center">JavaScript</p>
      </a>
      <a
        href="https://reac.dev/"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          <g fill="none">
            <g
              fill="currentColor"
              clipPath="url(#akarIconsReactFill0)"
            >
              <path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689m-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387m-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952M16.97 13c.264.656.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13m-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566m-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144m3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566M8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386m-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499m2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132m11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423m1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475"></path>
              <path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472"></path>
            </g>
            <defs>
              <clipPath id="akarIconsReactFill0">
                <path fill="#fff" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </g>
        </svg>
        <p className="text-sm text-center">React</p>
      </a>
      <a
        href="https://tailwindcss.com"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle items-center text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51"
          />
        </svg>
        <p className="text-sm text-center sm:pt-1">Tailwind CSS</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Node.js"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.087 5.083a2.4 2.4 0 0 1-.957.198m2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.233c0 .638.296.836 3.12 1.188c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038"
          ></path>
        </svg>
        <p className="text-sm text-center">Node</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Npm"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.13em"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M288 288h-32v-64h32zm288-128v192H288v32H160v-32H0V160zm-416 32H32v128h64v-96h32v96h32zm160 0H192v160h64v-32h64zm224 0H352v128h64v-96h32v96h32v-96h32v96h32z"
          ></path>
        </svg>
        <p className="text-sm text-center">NPM</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Mapbox"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m4.75 12.45c1.9-1.9 1.83-5.06-.16-7.04c-1.99-1.98-5.14-2.06-7.04-.16c-3.43 3.43-2.33 9.53-2.33 9.53s6.11 1.09 9.53-2.33m-3.6-6.59l.98 2.01l2.01.98l-2.01.98l-.98 2.01l-.98-2.01l-2.01-.98l2.01-.98z"
          ></path>
        </svg>
        <p className="text-sm text-center">Mapbox</p>
      </a>
      <a
        href="https://astro.build/"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188a3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614c.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z"
          ></path>
        </svg>
        <p className="text-sm text-center">Astro</p>
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <g clipPath="url(#akarIconsTypescriptFill0)">
              <path
                fill="currentColor"
                d="M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"
              ></path>
            </g>
            <defs>
              <clipPath id="akarIconsTypescriptFill0">
                <path fill="#fff" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </g>
        </svg>
        <p className="text-sm text-center">TypeScript</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Python_(programming_language)"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m19.079.24l1.203.265l.973.349l.787.4l.599.428l.453.453l.333.452l.213.439l.131.4l.057.344l.027.271l-.016.172v7.12l-.068.839l-.172.735l-.281.615l-.344.505l-.4.411l-.437.333l-.469.256l-.469.187l-.437.136l-.4.088l-.344.057l-.281.027h-7.964l-.916.067l-.787.183l-.667.297l-.547.359l-.443.428l-.36.463l-.265.485l-.199.489l-.135.468l-.093.428l-.053.359l-.025.281v4.079H4.308l-.28-.043l-.376-.093l-.421-.156l-.469-.24l-.479-.348l-.479-.48l-.469-.615l-.427-.787l-.376-.973l-.276-1.172L.069 17.6l-.068-1.64l.079-1.625l.213-1.385l.323-1.161l.427-.948l.48-.76l.531-.584l.563-.443l.557-.317l.536-.213l.48-.136l.427-.068l.317-.011h.213l.084.011h10.875V7.216H8.319l-.011-3.667l-.025-.495l.068-.453l.145-.411l.224-.376l.333-.343l.417-.308l.504-.265l.589-.245l.677-.197l.776-.161l.848-.131l.948-.083l1.027-.052l1.12-.027l1.692.068zm-8.396 2.64l-.308.437l-.109.547l.109.548l.308.452l.437.297l.547.12l.547-.12l.437-.297l.308-.452l.109-.548l-.109-.547l-.308-.437l-.437-.292l-.547-.119l-.547.119zm17.453 5.265l.369.084l.427.156l.469.24l.479.359l.48.469l.468.625l.427.785l.371.975l.281 1.177l.187 1.385l.068 1.64l-.083 1.641l-.215 1.385l-.317 1.145l-.427.948l-.48.76l-.536.6l-.557.437l-.563.323l-.531.213l-.48.12l-.427.068l-.317.025l-.213-.015H16.052v1.093h7.787l.016 3.683l.025.479l-.068.453l-.145.411l-.229.385l-.333.333l-.411.324l-.505.265l-.589.229l-.677.197l-.776.172l-.853.12l-.943.093l-1.032.052l-1.12.016l-1.692-.052l-1.427-.188l-1.199-.265l-.973-.333l-.787-.401l-.599-.443l-.453-.453l-.333-.452l-.213-.439l-.136-.4l-.052-.333l-.027-.267l.011-.171v-7.12l.068-.855l.177-.724l.276-.609l.349-.511l.4-.421l.439-.323l.468-.267l.464-.187l.443-.136l.401-.077l.343-.052l.453-.043h7.787l.921-.067l.787-.183l.667-.281l.547-.375l.439-.428l.359-.463l.271-.485l.199-.479l.135-.464l.095-.427l.052-.375l.025-.281V8.086h2.787l.188.011zm-8.631 19l-.308.443l-.104.548l.104.547l.308.437l.443.307l.547.104l.547-.104l.437-.307l.308-.437l.109-.547l-.109-.548l-.308-.443l-.437-.307l-.547-.104l-.547.104z"
          ></path>
        </svg>
        <p className="text-sm text-center">Python</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Git"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"
          />
        </svg>
        <p className="text-sm text-center">Git</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/GitHub"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg>
        <p className="text-sm text-center">Github</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Photoshop"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.83 4.83 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.91 4.91 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
          />
          <path
            fill="currentColor"
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.48 3.48 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.62 4.62 0 0 1-2.73.19c-.272-.06-.54-.14-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14c.107-.02.212-.053.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.21 4.21 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63c.289.192.593.36.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
          />
        </svg>
        <p className="text-sm text-center">Photoshop</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Photoshop"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.83 4.83 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.91 4.91 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
          />
          <path
            fill="currentColor"
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.48 3.48 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.62 4.62 0 0 1-2.73.19c-.272-.06-.54-.14-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14c.107-.02.212-.053.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.21 4.21 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63c.289.192.593.36.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
          />
        </svg>
        <p className="text-sm text-center">Illustrator</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Photoshop"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.83 4.83 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.91 4.91 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
          />
          <path
            fill="currentColor"
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.48 3.48 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.62 4.62 0 0 1-2.73.19c-.272-.06-.54-.14-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14c.107-.02.212-.053.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.21 4.21 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63c.289.192.593.36.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
          />
        </svg>
        <p className="text-sm text-center">Bridge</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Photoshop"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.83 4.83 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.91 4.91 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
          />
          <path
            fill="currentColor"
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.48 3.48 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.62 4.62 0 0 1-2.73.19c-.272-.06-.54-.14-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14c.107-.02.212-.053.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.21 4.21 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63c.289.192.593.36.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
          />
        </svg>
        <p className="text-sm text-center">Figma</p>
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Photoshop"
        target="_blank"
        className="flex flex-col justify-between items-center align-middle text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.83 4.83 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.91 4.91 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
          />
          <path
            fill="currentColor"
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.48 3.48 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.62 4.62 0 0 1-2.73.19c-.272-.06-.54-.14-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14c.107-.02.212-.053.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.21 4.21 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63c.289.192.593.36.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
          />
        </svg>
        <p className="text-sm text-center">Final Cut Pro</p>
      </a>
    </div>
  );
}

NETLIFY ADD
*/

export default MyTechStack;
