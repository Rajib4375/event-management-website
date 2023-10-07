/* eslint-disable react/prop-types */

import EventsCard from "./EventsCard";


const Events = ({events}) => {
    console.log(events)
    return (
        <div className="py-10">
            <h2 className="text-2xl font-bold text-center">All Educational and Training Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {
                    events?.map(event=><EventsCard key={event.id} event ={event}></EventsCard>)
                }
            </div>
            
        </div>
    );
};

export default Events;