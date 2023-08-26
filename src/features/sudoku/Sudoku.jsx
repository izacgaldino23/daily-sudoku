import Sector from './sector/Sector'

function Sudoku() {
	let sectors = [...Array(9)].map((_, index) => index+1)

	return (
		<>
			{sectors.map(item => <Sector key={"sector_"+item}></Sector>
		)}
		</>
	);
}

export default Sudoku;