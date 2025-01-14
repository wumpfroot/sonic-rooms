const RoomCard = ({ room }: { room: Room }) => {
	return (
		<div className="flex flex-col items-center justify-center mb-10">
			<h2>{room.name}</h2>
			<img className="room-image" src={room.image} alt={`Image of the ${room.name}`} />
			<p>{room.description}</p>
			<p className="text-center">
				Price: <span className="font-bold">{room.price_per_hour}€</span>/hour
			</p>
		</div>
	);
};

export default RoomCard;
