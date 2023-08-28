import Tile from "./tile/tile"

function Sector() {
	let tiles = [...Array(9)].map((_, index) => index+1)

	return (
		<div className='Sector'>
			{tiles.map(item => <Tile key={item}>{item}</Tile>)}
		</div>
	)
}

export default Sector