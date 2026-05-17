export default function ServerBox({
  children,
  gridArea,
  isPdf,
  pdfOrder,
  pdfWidth,
}) {
  const style = {
    "--grid-area": isPdf ? undefined : gridArea,
    "--pdf-order": pdfOrder,
    "--pdf-width": pdfWidth,
  };

  return (
    <div
      className={`server-box ${isPdf ? "pdf" : "px-8 py-5"}`}
      style={style}
    >
      <div className="bg rounded-xl" />
      <div className="min-h-0">
        <div className={isPdf ? "text-xs" : "text-base"}>{children}</div>
      </div>
    </div>
  );
}
