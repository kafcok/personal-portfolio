export function IconFlagPoland({ cls_hlp = "w-6 h-6" }) {
  return render("1F1F5-1F1F1", cls_hlp);
}

export function IconFlagUK({ cls_hlp }) {
  return render("1F1EC-1F1E7", cls_hlp);
}

export function IconCrescentMoon({ cls_hlp }) {
  return render("1F319", cls_hlp);
}

export function IconStar({ cls_hlp }) {
  return render("2B50", cls_hlp);
}

export function IconSun({ cls_hlp }) {
  return render("2600", cls_hlp);
}

function render(file_name, class_helper = "w-6 h-6") {
  return (
    <span className="inline-block">
      <img
        src={`/icons/${file_name}.svg`}
        className={`inline-block ${class_helper}`}
      />
    </span>
  );
}
