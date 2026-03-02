export function Ai({ cls_hlp }) {
  return render("ai", cls_hlp);
}

export function Astro({ cls_hlp }) {
  return render("astro", cls_hlp);
}

export function Bicep({ cls_hlp }) {
  return render("bicep", cls_hlp);
}

export function Bike({ cls_hlp }) {
  return render("bike", cls_hlp);
}

export function Blender({ cls_hlp }) {
  return render("blender", cls_hlp);
}

export function Bootstrap({ cls_hlp }) {
  return render("bootstrap", cls_hlp);
}

export function Comm({ cls_hlp }) {
  return render("comm", cls_hlp);
}

export function Contact({ cls_hlp }) {
  return render("contact", cls_hlp);
}

export function Cplusplus({ cls_hlp }) {
  return render("cplusplus", cls_hlp);
}

export function Csharp({ cls_hlp }) {
  return render("csharp", cls_hlp);
}

export function Css({ cls_hlp }) {
  return render("css", cls_hlp);
}

export function Dog({ cls_hlp }) {
  return render("dog", cls_hlp);
}

export function Edu({ cls_hlp }) {
  return render("edu", cls_hlp);
}

export function Email({ cls_hlp }) {
  return render("email", cls_hlp);
}

export function En({ cls_hlp }) {
  return render("en", cls_hlp);
}

export function Experience({ cls_hlp }) {
  return render("experience", cls_hlp);
}

export function Git({ cls_hlp }) {
  return render("git", cls_hlp);
}

export function Heart({ cls_hlp }) {
  return render("heart", cls_hlp);
}

export function Html({ cls_hlp }) {
  return render("html", cls_hlp);
}

export function Idea({ cls_hlp }) {
  return render("idea", cls_hlp);
}

export function Info({ cls_hlp }) {
  return render("info", cls_hlp);
}

export function Javascript({ cls_hlp }) {
  return render("javascript", cls_hlp);
}

export function Lang({ cls_hlp }) {
  return render("lang", cls_hlp);
}

export function Leader({ cls_hlp }) {
  return render("leader", cls_hlp);
}

export function Link({ cls_hlp }) {
  return render("link", cls_hlp);
}

export function Linkedin({ cls_hlp }) {
  return render("linkedin", cls_hlp);
}

export function Moon({ cls_hlp }) {
  return render("moon", cls_hlp);
}

export function Next({ cls_hlp }) {
  return render("next", cls_hlp);
}

export function Node({ cls_hlp }) {
  return render("node", cls_hlp);
}

export function Pad({ cls_hlp }) {
  return render("pad", cls_hlp);
}

export function Pdf({ cls_hlp }) {
  return render("pdf", cls_hlp);
}

export function Phone({ cls_hlp }) {
  return render("phone", cls_hlp);
}

export function Pl({ cls_hlp }) {
  return render("pl", cls_hlp);
}

export function Ps({ cls_hlp }) {
  return render("ps", cls_hlp);
}

export function Racing({ cls_hlp }) {
  return render("racing", cls_hlp);
}

export function React({ cls_hlp }) {
  return render("react", cls_hlp);
}

export function Reactquery({ cls_hlp }) {
  return render("reactquery", cls_hlp);
}

export function Redux({ cls_hlp }) {
  return render("redux", cls_hlp);
}

export function Rest({ cls_hlp }) {
  return render("rest", cls_hlp);
}

export function Ribbon({ cls_hlp }) {
  return render("ribbon", cls_hlp);
}

export function Rwd({ cls_hlp }) {
  return render("rwd", cls_hlp);
}

export function Sass({ cls_hlp }) {
  return render("sass", cls_hlp);
}

export function Snowboard({ cls_hlp }) {
  return render("snowboard", cls_hlp);
}

export function Star({ cls_hlp }) {
  return render("star", cls_hlp);
}

export function Sun({ cls_hlp }) {
  return render("sun", cls_hlp);
}

export function Tailwind({ cls_hlp }) {
  return render("tailwind", cls_hlp);
}

export function Tech({ cls_hlp }) {
  return render("tech", cls_hlp);
}

export function Unity({ cls_hlp }) {
  return render("unity", cls_hlp);
}

export function render(file_name, class_helper = "w-6 h-6") {
  return (
    // <span className="inline-block">
    <img
      src={`/icons/icon-${file_name}.svg`}
      className={`inline-block ${class_helper}`}
    />
    // </span>
  );
}
