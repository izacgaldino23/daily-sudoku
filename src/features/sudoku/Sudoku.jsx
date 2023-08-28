import Sector from './sector/Sector'
import './Sudoku.css'

function Sudoku() {
	let sectors = [...Array(9)].map((_, index) => index+1)

	return (
		<div className='Sudoku'>
			{sectors.map(item => <Sector key={"sector_"+item}/>)}
		</div>
	);
}

export default Sudoku;