import useTypingEffect from "react-use-typing-effect";

const text = `Hi there! I'm Jack, a London-based designer and developer.
I've spent the last year and a half learning the fundamentals of development,
including taking part in Just IT's highly selective twelve-week
bootcamp. So far I've learnt HTML, CSS, Javascript, Python, React and
Tailwind CSS.`;

function OpeningPage() {
  return (
    <div className="mx-5 mb-10 py-10 lg:grid lg:grid-cols-3">
      <div className="mt-10 h-auto border-2 border-black p-5 hover:shadow-md hover:shadow-ykb">
        <img
          src="/opening-page/jackkershaw.jpg"
          alt="a photo of me. I'm wearing a blue jumper, and sitting with my head supported by my left arm."
        />
      </div>
      <div className="mx-10 mb-10 py-10 text-2xl text-ykb-700 sm:col-span-2 md:text-5xl">
        {useTypingEffect({
          over: text,
          loop: true,
          charSpeed: 50,
          delayEnd: 5000,
        })}
      </div>
    </div>
  );
}

export default OpeningPage;
