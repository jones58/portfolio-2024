
function DarkMode() {

  const handleClick = () => {
    if (document.body.classList.contains("darkMode")) {
      document.body.classList.remove("darkMode");
    } else {
      document.body.classList.add("darkMode");
    }
  }

    return (
        <>
          <svg
            width="100"
            height="100"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            id="dark-mode"
            className="icon"
            onClick = {() => {handleClick()}}
            alt="button to enable user to switch to dark mode, looks like a sun and moon made of circles which rotate when clicked."
          >
            <g>
              <path
                fill="currentcolor"
                d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"
              />
              <path
                d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"
                fill="currentcolor"
              />
            </g>
            <title>Dark mode</title>
            </svg>
    </>
    )
}

export default DarkMode;
