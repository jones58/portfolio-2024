function OpeningPage() {
  return (
    <div>
      <div className="flex sm:flex-row justify-between sm:justify-center sm:space-x-10 flex-col">
        <img
          src="/opening-page/jackkershaw.jpg"
          className="sm:w-[30vw] h-auto object-cover object-center rounded-lg"
          alt="Jack wearing a blue jumper and black headphones, peering over his laptop at the camera"
        ></img>
        <div className=" flex flex-col justify-between sm:max-w-2xl">
          <p className="text-xl sm:text-2xl py-14 sm:py-0">
            Hi there! I'm a frontend developer based in London. With
            over ten years of design experience and two years in
            development, I’m passionate about creating beautiful and
            functional products that enhance user experience. My
            proactive and organised approach drives me to continuously
            build new projects and learn new skills and technologies.
          </p>
          <div className="flex flex-col justify-between space-y-4">
            <a
              href="/contact"
              className=" bg-ykb hover:bg-ykbdark active:bg-ykblight text-neutral-100 rounded-lg py-5 px-4 no-underline text-center"
            >
              Get In Touch
            </a>
            <a
              href="/coding"
              className=" bg-ykb hover:bg-ykbdark active:bg-ykblight text-neutral-100 rounded-lg py-5 px-4 no-underline text-center"
            >
              See Recent Work
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default OpeningPage;
