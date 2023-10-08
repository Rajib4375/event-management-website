/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const EventsCard = ({event}) => {
    const {id,image,title,description,price} = event || {}
    return (
        <div>
           <div className="card w-[417px] h-[592px] bg-[#c4b5fd] shadow-xl">
    <figure><img className="w-[417px] h-[278px]" src={image} alt="" /></figure>
   <div className="card-body">
    <h2 className="card-title text-[#6d28d9]">{title}</h2>
    <p className="text-[#6d28d9]">{description}</p>
    <p className="text-[#6d28d9]">{price} $</p>
    <div className="card-actions justify-end">
      <Link to={`/events/${id}`}>
      <button className="btn btn-primary bg-[#4c1d95]">See Details</button>
      </Link>
    </div>
  </div>
  </div>
        </div>
    );
};

export default EventsCard;