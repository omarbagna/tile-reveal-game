const imageObjects = [
	{
		revealImage:
			'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1712238645781-c4d9dbbe9b88?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1712238645781-c4d9dbbe9b88?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1712086353403-54a24887e74f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1712086353403-54a24887e74f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1710170600927-7a39aa2c5890?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1710170600927-7a39aa2c5890?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1710936721263-e78ffbca7785?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1710936721263-e78ffbca7785?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1592547097938-7942b22df3db?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1592547097938-7942b22df3db?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1672864825929-6c623785c5cb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1672864825929-6c623785c5cb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1630710478039-9c680b99f800?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		revealImage:
			'https://images.unsplash.com/photo-1630710478039-9c680b99f800?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const GridTile = ({ tileImages }) => {
	const [reveal, setReveal] = React.useState(false);
	let currentImage = { ...tileImages, baseImage: './scratchcode.JPG' };

	const changeImage = () => {
		setReveal((prev) => !prev);
	};

	return (
		<div
			className="col overflow-hidden border rounded p-0"
			onClick={changeImage}
			style={{ height: '150px', width: '150px' }}>
			<img
				className="w-100 h-100 object-fit-cover"
				src={reveal ? currentImage?.revealImage : currentImage?.baseImage}
				alt={'image'}
			/>
		</div>
	);
};

const Grid = ({ imagesData }) => {
	const images = imagesData
		.map((imageGroup) => ({ imageGroup, id: Math.random() }))
		.sort((a, b) => a.id - b.id)
		.map(({ imageGroup }) => imageGroup);
	return (
		<div className="w-50 text-center ">
			<h1 className="w-100 text-center">Tile Reveal Game</h1>
			<div className="row row-cols-4 gap-3 justify-content-center">
				{images.map((imageObject, index) => (
					<GridTile key={index} tileImages={imageObject} />
				))}
			</div>
		</div>
	);
};

ReactDOM.render(
	<Grid imagesData={imageObjects} />,
	document.getElementById('root')
);
