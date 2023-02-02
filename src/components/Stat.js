const rand = Math.floor(Math.random() * 100);
const Stat = () => (
  <div className="progress-stat">
    <p className="percent-complete">{`${rand}%`}</p>
    <p className="completed">Completed</p>
  </div>

);

export default Stat;
