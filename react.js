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
					? 'border-success-subtle border-2'
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

const GameOver = () => {
	return (
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
	);
};

const NewGame = ({ flips }) => {
	return (
		<div
			className="position-fixed top-0 start-0 d-flex flex-column justify-content-center align-items-center gap-3 w-100 h-100"
			style={{
				backgroundColor: 'rgba(0,0,0,0.5)',
				backdropFilter: 'blur(10px)',
			}}>
			<h1 className="text-success" style={{ fontSize: '70px' }}>
				Game Won
			</h1>
			<h3 className="text-light">You completed the game in {flips} flips</h3>
			<button
				type="button"
				className="btn btn-success"
				onClick={() => window.location.reload()}>
				Start a new game
			</button>
		</div>
	);
};

const Grid = ({ imagesData }) => {
	const [tiles, setTiles] = React.useState(imagesData);
	const [firstTile, setFirstTile] = React.useState(null);
	const [flips, setFlips] = React.useState(0);
	const [difficulty, setDifficulty] = React.useState(null);
	const [gameComplete, setGameComplete] = React.useState(false);

	const handleTileClick = (tile) => {
		setFlips((prev) => prev + 1);
		let tileIndex = tiles.findIndex((item) => item._id === tile._id);

		if (!firstTile) {
			setFirstTile(tile);

			setTiles((prev) => {
				prev[tileIndex].reveal = true;
				prev[tileIndex].clicked = true;
				return prev;
			});
		} else {
			let firstTileIndex = tiles.findIndex(
				(item) => item._id === firstTile._id
			);

			if (firstTile.matcher === tile.matcher) {
				setTiles((prev) => {
					prev[tileIndex].reveal = true;
					prev[tileIndex].clicked = true;
					prev[tileIndex].correct = true;
					prev[firstTileIndex].reveal = true;
					prev[firstTileIndex].clicked = true;
					prev[firstTileIndex].correct = true;
					return prev;
				});
				setFirstTile(null);
			} else {
				setTiles((prev) => {
					prev[tileIndex].reveal = true;
					prev[tileIndex].clicked = true;
					prev[tileIndex].inCorrect = true;
					prev[firstTileIndex].reveal = true;
					prev[firstTileIndex].clicked = true;
					prev[firstTileIndex].inCorrect = true;
					return prev;
				});

				setTimeout(() => {
					setTiles((prev) => {
						prev[tileIndex].reveal = false;
						prev[tileIndex].clicked = false;
						prev[tileIndex].inCorrect = false;
						prev[firstTileIndex].reveal = false;
						prev[firstTileIndex].clicked = false;
						prev[firstTileIndex].inCorrect = false;
						return prev;
					});
					setFirstTile(null);
				}, 500);
			}
		}
	};

	const checkGameComplete = () => {
		let complete = tiles.every((tile) => tile.correct === true);
		setGameComplete(complete);
	};

	React.useEffect(() => {
		checkGameComplete();
	}, [flips]);

	return (
		<div className="w-50 text-center ">
			<h1 className="w-100 text-center">Tile Reveal Game</h1>
			{difficulty !== null ? (
				<div className="w-100 text-center d-flex justify-content-center align-items-center gap-4 mb-3">
					<div className="text-center d-flex justify-content-center align-items-center gap-2">
						<h4>Flip Count</h4>{' '}
						<h5>
							<span className="badge rounded-pill text-bg-dark">
								{' '}
								{flips}/{difficulty.maxFlips}
							</span>
						</h5>
					</div>
					<h4>
						<span
							className={`badge rounded-pill text-capitalize ${
								difficulty.level === 'easy'
									? 'text-bg-success'
									: difficulty.level === 'medium'
									? 'text-bg-warning'
									: 'text-bg-danger'
							}`}>
							{difficulty.level}
						</span>
					</h4>
				</div>
			) : null}

			{(difficulty !== null && flips > difficulty.maxFlips) ||
			(!gameComplete &&
				difficulty !== null &&
				flips === difficulty.maxFlips) ? (
				<GameOver />
			) : null}

			{gameComplete || (gameComplete && flips === difficulty.maxFlips) ? (
				<NewGame flips={flips} />
			) : null}

			{difficulty !== null ? (
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
							onClick={() =>
								setDifficulty({
									level: 'easy',
									maxFlips: 40,
								})
							}>
							Easy
						</button>
						<button
							type="button"
							className="btn btn-warning"
							onClick={() => setDifficulty({ level: 'medium', maxFlips: 30 })}>
							Medium
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => setDifficulty({ level: 'hard', maxFlips: 20 })}>
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
