export default function CardFront({ num, name, month, year }) {
	return (
		<div className='card-front'>
			<div className='logos'>
				<div className='logo-1'></div>
				<div className='logo-2'></div>
			</div>
			<div className='info'>
				<p className='card-number'>{num}</p>
				<div className='info-bottom'>
					<p>{name}</p>
					<p>
						{month}/{year}
					</p>
				</div>
			</div>
		</div>
	)
}
