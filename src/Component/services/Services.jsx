import "./Services.css"

export default function Services () {
  const ArrayServices = [
    {
      id: 1,
      title: "Gold Card",
      pric: "$499",
      dis: "Monthly access to fitness area.Training sessions on demand.Personal trainer on demand.Live classes on demand.",
      time: "3 Month",
      link: ""
    },
    {
      id: 2,
      title: "Flexible Card",
      pric: "$899",
      dis: "Monthly access to fitness area.Training sessions on demand.Personal trainer on demand.Live classes on demand.",
      time: "6 Month",
      link: ""
    },
    {
      id: 3,
      title: "Platinum Card",
      pric: "$1299",
      dis: "Monthly access to fitness area.Training sessions on demand.Personal trainer on demand.Live classes on demand.",
      time: "12 Month",
      link: ""
    }
  ];
  return (
    <div className="Box">
      <div className="continer continerservices">
        <div className="BoxServices" id="services">
          <div className="TitleServices">
            <h2>
              Why <span>Choose</span> Us
            </h2>
          </div>
          <div className="Services">
            {ArrayServices.map(({ id, title, pric, dis, time, link }) => (
              <div key={id} className="Card">
                <h2>{title}</h2>
                <h2>{pric}</h2>
                <p>{dis}</p>
                <h3>Duration: {time}</h3>
                <a href={link}>Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}