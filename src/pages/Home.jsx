import { useEffect, useState } from "react";
import supabase from "../supabaseConfig";

const Home = () => {
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
		<div>
			<h1>Sonic Rooms - Home</h1>
			{error && <h2>{error}</h2>}
			{rooms && (
				<div>
					{rooms.map((room) => (
						<div key={room.id}>
							<h3 className="text-xl">{room.name}</h3>
							<p>{room.description}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default Home;
