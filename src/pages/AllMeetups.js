import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, SetLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://painting-project-bba7c-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        SetLoadedMeetups(meetups);
      });
    //Deixamos o segundo parametro vazio (uma array) pois não há dependencias externas e essa arquivo só vai carregar uma vez, que será a primeira.
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    );
  }

  return (
    <section>
      <h4>Welcome! | All Paintings:</h4>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
