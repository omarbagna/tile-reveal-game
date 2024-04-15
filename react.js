const imageObjects = [
	{
		_id: 1,
		matcher: 1,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-1.jpg',
	},
	{
		_id: 2,
		matcher: 1,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-1.jpg',
	},
	{
		_id: 3,
		matcher: 2,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-2.jpg',
	},
	{
		_id: 4,
		matcher: 2,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-2.jpg',
	},
	{
		_id: 5,
		matcher: 3,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-3.jpg',
	},
	{
		_id: 6,
		matcher: 3,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-3.jpg',
	},
	{
		_id: 7,
		matcher: 4,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-4.jpg',
	},
	{
		_id: 8,
		matcher: 4,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-4.jpg',
	},
	{
		_id: 9,
		matcher: 5,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-5.jpg',
	},
	{
		_id: 10,
		matcher: 5,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-5.jpg',
	},
	{
		_id: 11,
		matcher: 6,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-6.jpg',
	},
	{
		_id: 12,
		matcher: 6,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-6.jpg',
	},
	{
		_id: 13,
		matcher: 7,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-7.jpg',
	},
	{
		_id: 14,
		matcher: 7,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-7.jpg',
	},
	{
		_id: 15,
		matcher: 8,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-8.jpg',
	},
	{
		_id: 16,
		matcher: 8,
		correct: false,
		clicked: false,
		inCorrect: false,
		reveal: false,
		revealImage: './images/image-8.jpg',
	},
];

const GridTile = ({ tileImage, handleTileClick, reveal, clicked }) => {
	const changeImage = () => {
		if (!reveal && !clicked) {
			handleTileClick(tileImage);
		}
	};

	return (
		<div
			className={`col overflow-hidden border ${
				reveal
					? 'border-primary-subtle border-2'
					: tileImage.inCorrect
					? 'border-danger-subtle border-2'
					: tileImage.correct
					? 'border-success-subtle border-2'
					: ''
			} rounded p-0`}
			onClick={changeImage}
			style={{ height: '150px', width: '150px' }}>
			<img
				className="w-100 h-100 object-fit-cover"
				src={
					reveal || tileImage.reveal
						? tileImage.revealImage
						: './scratchcode.JPG'
				}
				alt={'image'}
			/>
		</div>
	);
};

const Grid = ({ imagesData }) => {
	const [tiles, setTiles] = React.useState(imagesData);
	const [firstTile, setFirstTile] = React.useState(null);
	const [flips, setFlips] = React.useState(0);
	const [difficulty, setDifficulty] = React.useState(0);
	const [gameComplete, setGameComplete] = React.useState(false);

	const handleTileClick = (tile) => {
		setFlips((prev) => prev + 1);
		let tileIndex = tiles.findIndex((item) => item._id === tile._id);
		let allTiles = [...tiles];
		if (!firstTile) {
			setFirstTile(tile);

			allTiles[tileIndex].reveal = true;
			allTiles[tileIndex].clicked = true;
			setTiles(allTiles);
		} else {
			let firstTileIndex = tiles.findIndex(
				(item) => item._id === firstTile._id
			);

			if (firstTile.matcher === tile.matcher) {
				allTiles[tileIndex].correct = true;
				allTiles[tileIndex].reveal = true;
				allTiles[tileIndex].clicked = true;
				allTiles[firstTileIndex].reveal = true;
				allTiles[firstTileIndex].clicked = true;
				allTiles[firstTileIndex].correct = true;
				setTiles(allTiles);
				setFirstTile(null);
			} else {
				allTiles[tileIndex].reveal = true;
				allTiles[tileIndex].clicked = true;
				allTiles[tileIndex].inCorrect = true;
				setTiles(allTiles);

				setTimeout(() => {
					allTiles[firstTileIndex].reveal = false;
					allTiles[firstTileIndex].clicked = false;
					allTiles[firstTileIndex].inCorrect = false;
					allTiles[tileIndex].reveal = false;
					allTiles[tileIndex].clicked = false;
					allTiles[tileIndex].inCorrect = false;
					setTiles(allTiles);
					setFirstTile(null);
				}, 500);
			}
		}
	};

	const checkGameComplete = () => {
		let complete = tiles.every((tile) => tile.correct === true);
		console.log(tiles);
		console.log(complete);
		setGameComplete(complete);
	};

	React.useEffect(() => {
		checkGameComplete();
	}, [flips]);

	return (
		<div className="w-50 text-center ">
			<h1 className="w-100 text-center">Tile Reveal Game</h1>
			{difficulty !== 0 ? (
				<div className="w-100 text-center d-flex justify-content-center align-items-center gap-2">
					<h4>Flip Count</h4>{' '}
					<h5>
						<span className="badge rounded-pill text-bg-dark">
							{' '}
							{flips}/{difficulty}
						</span>
					</h5>
				</div>
			) : null}

			{difficulty !== 0 && flips > difficulty ? (
				<div
					className="position-fixed top-0 start-0 d-flex flex-column justify-content-center align-items-center gap-3 w-100 h-100"
					style={{
						backgroundColor: 'rgba(0,0,0,0.5)',
						backdropFilter: 'blur(10px)',
					}}>
					<h1 className="text-danger" style={{ fontSize: '70px' }}>
						Game Over!
					</h1>
					<h3 className="text-light">Flip limit exceeded for this round</h3>
					<button
						type="button"
						className="btn btn-dark"
						onClick={() => window.location.reload()}>
						Try again
					</button>
				</div>
			) : null}

			{gameComplete ? (
				<div
					className="position-fixed top-0 start-0 d-flex flex-column justify-content-center align-items-center gap-3 w-100 h-100"
					style={{
						backgroundColor: 'rgba(0,0,0,0.5)',
						backdropFilter: 'blur(10px)',
					}}>
					<h1 className="text-success" style={{ fontSize: '70px' }}>
						Game Won
					</h1>
					<h3 className="text-light">
						You completed the game in {flips} flips
					</h3>
					<button
						type="button"
						className="btn btn-success"
						onClick={() => window.location.reload()}>
						Start a new game
					</button>
				</div>
			) : null}

			{difficulty !== 0 ? (
				<div className="row row-cols-4 gap-3 justify-content-center">
					{tiles.map((imageObject) => (
						<GridTile
							key={imageObject._id}
							tileImage={imageObject}
							handleTileClick={handleTileClick}
							reveal={imageObject.reveal || false}
							clicked={imageObject.clicked || false}
						/>
					))}
				</div>
			) : (
				<div className="d-flex flex-column justify-content-center align-items-center gap-3 mt-5">
					<h2>Select difficulty</h2>
					<div className="d-flex justify-content-center align-items-center gap-4">
						<button
							type="button"
							className="btn btn-success"
							onClick={() => setDifficulty(40)}>
							Easy
						</button>
						<button
							type="button"
							className="btn btn-warning"
							onClick={() => setDifficulty(30)}>
							Medium
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => setDifficulty(20)}>
							Hard
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

ReactDOM.render(
	<Grid
		imagesData={imageObjects
			.map((imageGroup) => ({ imageGroup, id: Math.random() }))
			.sort((a, b) => a.id - b.id)
			.map(({ imageGroup }) => imageGroup)}
	/>,
	document.getElementById('root')
);
