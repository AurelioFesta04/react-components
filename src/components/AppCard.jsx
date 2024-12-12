import CardButton from "./CardButton"

function AppCard() {

  return (
    <>
      <div className="card">
        <div className="fake-photo">
          <p className="formato">600 x 400</p>
        </div>
        <div className="card-bottom">
          <h2>Titolo del post</h2>
          <p className="testo-card">Lorem, ipsum dolor sit amet consectetur adipisicing. Repellat tenetur laudantium temporibus incidunt rem alias eaque cum nisi! Itaque officia architecto quaerat repellat quasi culpa, odio ut minus!ipsum dolor sit amet consectetur adipisicing elit.</p>
          <CardButton />
        </div>
      </div>
    </>
  )
}

export default AppCard