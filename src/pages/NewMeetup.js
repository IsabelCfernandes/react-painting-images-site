import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetHandler(meetupData) {
    fetch(
      "https://painting-project-bba7c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-type": "application/json"
        }
      }
    ).then(() => {
      //destinação do link após o envio p/ o firebase
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h2>Add New Painting</h2>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </section>
  );
}
