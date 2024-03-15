import { useEffect, useState } from "react";
import supabase from "../supabaseConfig";

const Rooms = () => {
	const [rooms, setRooms] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRooms = async () => {
			const { data, error } = await supabase.from("room").select();

			if (error) {
				setRooms(null);
				setError("Could not fetch rooms");
				console.error(error);
			}

			if (data) {
				setRooms(data);
				setError(null);
			}
		};
		fetchRooms();
	}, []);
	return (
		<div className="grid place-content-center flex-grow">
			{error && <h2>{error}</h2>}
			{rooms && (
				<div className="flex gap-10">
					{rooms.map((room) => (
						<div key={room.id}>
							<h3 className="text-xl">{room.name}</h3>
							<p>{room.description}</p>
							<img className="rounded-sm" src="https://picsum.photos/200" alt="random photo" />
							<p>
								<span className="font-bold">£</span>
								{room.price_per_hour}/hour
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default Rooms;
