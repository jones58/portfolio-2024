import useTypingEffect from "react-use-typing-effect";

function OpeningPage() {
  return (
    <div className="mx-10 mb-10 py-10 pb-10">
      <p className="w-full py-4 text-2xl">
        Below you'll find my CV. You can also{" "}
        <a
          href="Jack-Kershaw-CV.pdf"
          target="_blank"
          download="Jack-Kershaw-CV.pdf"
          className="hover:underline"
        >
          download it as a PDF.
        </a>
      </p>
      <iframe
        src="Jack-Kershaw-CV.pdf"
        className=" h-screen w-full border-2 border-black hover:shadow-md hover:shadow-ykb"
      >
        title="CV" >
      </iframe>
    </div>
  );
}

export default OpeningPage;
