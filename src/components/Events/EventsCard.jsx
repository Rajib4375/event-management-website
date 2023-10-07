/* eslint-disable react/prop-types */


const EventsCard = ({event}) => {
    const {id,image,title,description,price} = event || {}
    return (
        <div>
           <div className="card w-[417px] h-[592px] bg-base-100 shadow-xl">
    <figure><img src={image} alt="" /></figure>
   <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
  </div>
        </div>
    );
};

export default EventsCard;