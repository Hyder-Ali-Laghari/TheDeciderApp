export default function Header() {
  return (
    <header className="w-full px-8 py-4 flex flex-wrap gap-4 justify-between">
      <div className="left-side-heading">
        <h1
          className="tracking-wider text-white text-4xl"
        >
          The Decider
        </h1>
      </div>
      <div className=" flex gap-8 mt-2 text-black right-side-stuff">
        <span>spinner colours</span>
        <span>About us</span>
        <span>Other Projects</span>
      </div>
    </header>
  );
}
