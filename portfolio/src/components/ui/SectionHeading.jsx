import AnimateIn from "./AnimateIn";

function SectionHeading({ kicker, title, subtitle, align = "left" }) {
  return (
    <AnimateIn className={`section-heading section-heading--${align}`}>
      {kicker ? <p className="eyebrow">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </AnimateIn>
  );
}

export default SectionHeading;
