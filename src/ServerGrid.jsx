export default function ServerGrid({ children, isPdf }) {
  return <div className={`server-grid ${isPdf ? "pdf" : ""}`}>{children}</div>;
}
