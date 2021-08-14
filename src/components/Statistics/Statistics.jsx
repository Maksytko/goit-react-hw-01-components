import style from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map((stat) => {
          return (
            <li className={style.item} key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
