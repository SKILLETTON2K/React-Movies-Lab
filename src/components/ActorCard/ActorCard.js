import "../../pages/MoviePage/MoviePage.css";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      style={{
        backgroundColor: "#B7A3FA",
        WebkitBackgroundSize: "cover",
        height:"5rem",
        paddingBottom: "7.5rem"

      }}
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}
