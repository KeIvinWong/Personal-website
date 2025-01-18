import { formatDate } from "../../Utils/dateUtils";
import AgendaProps from "./AgendaProps";

function Agenda({
    eventName = "placeholder",
    eventDate = null,
    eventLocation = "TBH"
}: AgendaProps) {
    return (
        <div>
            <h1>Event: {eventName}</h1>
            <p>Date: {formatDate(eventDate)}</p>
            <p>Location: {eventLocation}</p>
        </div>
    );
}

export default Agenda;