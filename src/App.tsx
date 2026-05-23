import "./styles.css";

type Incident = {
  id: number;
  title: string;
  location: string;
  priority: "Laag" | "Middel" | "Hoog";
  status: "Nieuw" | "Eenheid onderweg" | "Afgehandeld";
};

const incidents: Incident[] = [
  {
    id: 1,
    title: "Pechmelding personenauto",
    location: "A2 Eindhoven",
    priority: "Middel",
    status: "Nieuw",
  },
  {
    id: 2,
    title: "Ongeval met vrachtwagen",
    location: "A58 Tilburg",
    priority: "Hoog",
    status: "Eenheid onderweg",
  },
];

const units = [
  { id: 101, name: "101 - Lepelvoertuig", status: "Beschikbaar" },
  { id: 201, name: "201 - Plateauwagen", status: "Beschikbaar" },
  { id: 901, name: "901 - Zware berging", status: "Inzet" },
];

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div>
          <strong>Meldkamer Dispatch Game</strong>
        </div>
        <div className="stats">
          <span>€ 10.000</span>
          <span>Level 1</span>
          <span>Reputatie 100%</span>
        </div>
      </header>

      <main className="layout">
        <section className="panel left">
          <h2>Meldingen</h2>

          {incidents.map((incident) => (
            <div className="card" key={incident.id}>
              <div className="card-header">
                <strong>{incident.title}</strong>
                <span className={`priority ${incident.priority.toLowerCase()}`}>
                  {incident.priority}
                </span>
              </div>
              <p>{incident.location}</p>
              <small>Status: {incident.status}</small>
              <button>Eenheid inzetten</button>
            </div>
          ))}
        </section>

        <section className="map">
          <div className="map-placeholder">
            <h1>Kaart</h1>
            <p>Hier komt de live meldkamerkaart.</p>
          </div>
        </section>

        <section className="panel right">
          <h2>Eenheden</h2>

          {units.map((unit) => (
            <div className="unit" key={unit.id}>
              <strong>{unit.name}</strong>
              <span>{unit.status}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
