import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

function Statistic({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat) => {
          return (
            <li
              key={stat.id}
              style={{ backgroundColor: randomСolor() }}
              className="item"
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function randomСolor() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

Statistic.defaultProps = {
  // title: "LIST",
};
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
