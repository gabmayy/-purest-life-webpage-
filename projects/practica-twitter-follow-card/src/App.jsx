import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "videogamedunkey",
      name: "bidyagamesdinky",
      isFollowing: false,
    },
    {
      userName: "vegetta777",
      name: "Señor de Luque",
      isFollowing: false,
    },
    {
      userName: "lopezobrador",
      name: "AMLO",
      isFollowing: false,
    },
    {
      userName: "mrbeast",
      name: "Señor Bestia",
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
