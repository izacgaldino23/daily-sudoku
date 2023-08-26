import Tile from "./tile/tile"

function Sector() {
	let tiles = [...Array(9)].map((_, index) => index+1)

	return (
		<>
			{tiles.map(item => <Tile key={item} />)}
		</>
	)
}

export default Sector