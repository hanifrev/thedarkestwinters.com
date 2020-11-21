import React from 'react'
import News1 from './news/news1'
import News2 from './news/news2'

const MainContent = () => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <p className="col s12 m11 offset-m1">
          <News1 />
          <hr></hr>
        </p>
        <div className="col s12 m6">
          <p className="col s12 m10 offset-m2">
            <News2 />
            <hr></hr>
          </p>
        </div>
        <div className="col s12 m6">
          <p className="col s12 m10 offset-m1">
            Nicht, dass ich führtete ein Tier zu werden. Das wäre nicht sehr schlimm. Aber
            ein Mensch kann niemals ein Tier werden. Er stützt ein Tier vor über in einem
            abkommt.
            <hr></hr>
          </p>
        </div>
      </div>
      <div className="col s12 m3">
        <p>
          SIDE EXAMPLE Sticht in mein Auge und kehrt in mich ein Tief innen wohnt die
          Wahrheit Der Anfang, der Weg, das Ende Seit Tagen Atme ich nichts als Staub Die
          rostig alte Sonne wandert Wie auf einem dünnen Seil Entlang am Horizont. Sticht
          in mein Auge und kehrt in mich ein Tief innen wohnt die Wahrheit Der Anfang, der
          Weg, das Ende. Das Licht bahnt sich den Weg durch meine Adern Ich kann es fühlen
          wie Tausend Sonnenstrahlen Suchen den Weg zu dir
        </p>
      </div>
      {/* THE NEXT TASK IS MAKE USESTATE OR FUNCTION SO WE CAN CALL A COMPONENT FROM EXTERNAL JS FILE */}
    </div>
  )
}

export default MainContent
