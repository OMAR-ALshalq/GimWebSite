import "./About.css"

const ArrayBoxAbout = [
  {
    id: 1,
    Imge: "../../../public/banner.png",
    textOne: "Global Fitnees",
    textTow: "About us",
    textThree:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat provident dolorum nemo ducimus deleniti.",
    textFor:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita dicta quam dolorem?",
    A: "Get Started"
  },
  {
    id: 2,
    Imge: "../../../public/banner2.png",
    textOne: "Global Fitnees",
    textTow: "About us",
    textThree:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat provident dolorum nemo ducimus deleniti.",
    textFor:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita dicta quam dolorem?",
    A: "Get Started"
  },
  {
    id: 3,
    Imge: "../../../public/banner.png",
    textOne: "Global Fitnees",
    textTow: "About us",
    textThree:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat provident dolorum nemo ducimus deleniti.",
    textFor:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita dicta quam dolorem?",
    A: "Get Started"
  }
];


export default function About () {
  return (
    <div className="Box">
      <div className="continer continerAbout">
        <div className="MainBoxAbout" id="about">
          {/* {ArrayBoxAbout.map(
            ({ id, Imge, textOne, textTow, textThree, textFor, A }) => (
              <div key={id} className="BoxAbout" id="about">
                <div className="ImgAbout">
                  <img src={Imge}></img>
                </div>
                <div className="TextAbout">
                  <div className="Title">
                    <div className="number">0{id}</div>
                    <div className="Text">
                      <h5>{textOne}</h5>
                      <h1>{textTow}</h1>
                    </div>
                  </div>
                  <p>{textThree}</p>
                  <p>{textFor}</p>
                  <a href="#services">{A}</a>
                </div>
              </div>
            )
          )} */}
          {ArrayBoxAbout.map(
            ({ id, Imge, textOne, textTow, textThree, textFor, A }) => {
              const isEven = id % 2 === 0; // تحقق إذا كان زوجي

              return (
                <div
                  key={id}
                  className={`BoxAbout ${isEven ? "rowReverse" : ""}`}
                >
                  <div className={`ImgAbout ${isEven ? "ImgEven" : ""}`}>
                    <img src={Imge} alt="" />
                  </div>
                  <div className={`TextAbout ${isEven ? "TextEven" : ""}`}>
                    <div className="Title">
                      <div className={`number ${isEven ? "numberEven" : ""}`}>
                        0{id}
                      </div>
                      <div className="Text">
                        <h5 className={isEven ? "titleEven" : ""}>{textOne}</h5>
                        <h1 className={isEven ? "subtitleEven" : ""}>
                          {textTow}
                        </h1>
                      </div>
                    </div>
                    <p className={isEven ? "pEven" : ""}>{textThree}</p>
                    <p className={isEven ? "pEven" : ""}>{textFor}</p>
                    <a href="#services" className={isEven ? "linkEven" : ""}>
                      {A}
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}