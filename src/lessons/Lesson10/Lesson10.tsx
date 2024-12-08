import axios from "axios";
import { useState } from "react";

import { FactsContainer, Lesson10Container } from "./styles";
import Spinner from "components/Spinner/Spinner";
import Button from "components/Button/Button";

function Lesson10() {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const CAT_FACT = "https://catfact.ninja/fact";

  const fetchFact = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await axios.get(CAT_FACT);
      setFacts((prevFacts) => [...prevFacts, response.data.fact]);
    } catch (err: any) {
      setError("Failed to fetch cat fact. Please try again.");
      console.error("Error fetching cat fact:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAll = () => {
    setFacts([]);
  };



  return (
    <Lesson10Container>
      <h1>Cat Facts</h1>
      <div className="button-container">
        <Button name="GET MORE INFO" onClick={fetchFact} disabled={loading} />

        {facts.length > 0 && (
          <Button
            name="DELETE ALL DATA"
            onClick={handleDeleteAll}
            type="button"
          />
        )}
      </div>
      {loading && <Spinner />} 
      {error && <p className="error">{error}</p>}{" "}
      {facts.length > 0 && (
        <FactsContainer>
          {facts.map((fact, index) => (
            <p key={index}>{fact}</p>
          ))}
        </FactsContainer>
      )}
    </Lesson10Container>
  );
}

export default Lesson10;
