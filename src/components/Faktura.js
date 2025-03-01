import React, { useEffect, useState } from "react";
import Card from "./ui/Card";
import Spinner from "./ui/Spinner";
import "./Faktura.css";
import logo from "./Sanel P.png";

const Faktura = () => {
  const [faktura, setFaktura] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://faktura-dashboard-1.onrender.com/api/faktura") // Ensure this URL is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Mottatt data:", data);
        setFaktura(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Feil ved henting av faktura:", error);
        setError("Feil ved henting av faktura.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Faktura</h1>
      </div>
      <Card>
        <div className="faktura-details">
          <h2>Faktura #{faktura.fakturanummer}</h2>
          <p>
            <strong>Dato:</strong> {faktura.dato}
          </p>
          <h3>Selger</h3>
          <p>{faktura.selger.navn}</p>
          <p>{faktura.selger.adresse}</p>
          <p>
            <strong>Org.nr:</strong> {faktura.selger.orgnr}
          </p>
          <h3>Kunde</h3>
          <p>{faktura.kunde.navn}</p>
          <p>{faktura.kunde.adresse}</p>
          <h3>Varer</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Beskrivelse</th>
                <th>Antall</th>
                <th>Pris per enhet</th>
                <th>MVA</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {faktura.varer.map((vare, index) => (
                <tr key={index}>
                  <td>{vare.beskrivelse}</td>
                  <td>{vare.antall}</td>
                  <td>{vare.pris_per_enhet} kr</td>
                  <td>{vare.mva * 100}%</td>
                  <td>
                    {vare.antall * vare.pris_per_enhet * (1 + vare.mva)} kr
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Betaling</h3>
          <p>
            <strong>Total eks. MVA:</strong> {faktura.betaling.total_eks_mva} kr
          </p>
          <p>
            <strong>Total MVA:</strong> {faktura.betaling.total_mva} kr
          </p>
          <p>
            <strong>Total inkl. MVA:</strong> {faktura.betaling.total_inkl_mva}{" "}
            kr
          </p>
          <p>
            <strong>Betalingsfrist:</strong> {faktura.betaling.betalingsfrist}
          </p>
          <p>
            <strong>Betalingsmetode:</strong> {faktura.betaling.betalingsmetode}
          </p>
          <p>
            <strong>Kontonummer:</strong> {faktura.betaling.kontonummer}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Faktura;
