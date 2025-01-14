import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

const RoomsPage = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold text-center">Rooms</h1>
			<>
				{rooms.map((room) => (
					<RoomCard room={room} />
				))}
			</>
		</div>
	);
};

export default RoomsPage;
