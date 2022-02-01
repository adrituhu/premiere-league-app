import React from 'react';

const List = ({ teams }) => {
  return (
    <>
      {teams.map((team) => {
        const { id, name, coach, image } = team;
        return (
          <article key={id} alt={name}>
            <img className="image" src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{coach}</p>
              {team.keyPlayers.map((keyPlayer, index) => {
                const { firstPlayer, secondPlayer, thirdPlayer } = keyPlayer;
                return (
                  <div key={index}>
                    <ul>
                      <li>{firstPlayer}</li>
                      <li>{secondPlayer}</li>
                      <li> {thirdPlayer}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
