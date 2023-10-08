/* eslint-disable react/prop-types */



const EventCard = ({event}) => {
    const {id,image,title,description,price} = event || {}


    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions ">
      <button  className="btn btn-primary">price {price}$</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EventCard;