import { Link } from "@remix-run/react";

function LinkItem({
  displayName = "Home",
  url = "/",
  pathname = "/",
  border = true,
}) {
  return (
    <li
      className={`w-full h-6 text-center align-middle ${
        pathname === url ? "text-[#1CA17E]" : "text-[#b45ad3]"
      } hover:text-[#d8bde2] px-4 text-sm 
      ${border ? "border-[#b45ad3] border-r-[1px]" : ""}`}
    >
      <Link to={url}>{displayName}</Link>
    </li>
  );
}

function Footer({
  links = [{ displayName: "Home", url: "/" }],
  pathname = "/",
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[#242323] text-center h-16 md:h-36">
      <ul className="hidden md:grid grid-cols-6 justify-center items-center whitespace-nowrap">
        {links.map((item, index) => {
          return (
            <LinkItem
              key={item.displayName}
              displayName={item.displayName}
              url={item.url}
              pathname={pathname}
              border={links.length !== index + 1}
            />
          );
        })}
      </ul>
      <p className="font-copy2 text-xs text-[#a0a09f]">
        {`© ${new Date().getFullYear()}`}
      </p>
    </div>
  );
}

export { Footer };
