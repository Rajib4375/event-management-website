import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventCard from "./EventCard/EventCard";

const Event = () => {

    const [event, setEvent] = useState()

    const {id} = useParams()
     

     const events = useLoaderData()
     

     useEffect(()=>{

        const findEvent = events ?.find(event =>event.id === id)

       
        setEvent(findEvent)

     },[id,events])
     
     console.log(event)


    return (
        <div>
           <EventCard event ={event}></EventCard>
        </div>
    );
};

export default Event;