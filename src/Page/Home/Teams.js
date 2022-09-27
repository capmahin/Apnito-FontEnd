import React, { useEffect, useState } from "react";
import Team from "./Team";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="my-18">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase text-4xl">
          Our Team
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 pt-6 px-5 py-5">
        {teams.map((team) => (
          <Team key={team._id} team={team}></Team>
        ))}
      </div>
    </div>
  );
};

export default Teams;