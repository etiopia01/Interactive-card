import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form'
import CardFront from './Card-front'
import CardBack from './Card-back'
import './App.css'
import Example from './Example'

function App() {
	const [data, setData] = useState({
		name: '',
		number: '0000 0000 0000 0000',
		month: '00',
		year: '00',
		cvc: '000',
	})
	const update = info => {
		return setData(info)
	}

	return (
		<div className='background'>
			<div className='background-left'>
				<CardFront
					num={data.number}
					name={data.name}
					month={data.month}
					year={data.year}
				/>
				<CardBack cvc={data.cvc} />
			</div>
			<div className='background-right'>
				{/* <Form update={update} /> */}
				<Form update={update} />
			</div>
		</div>
	)
}

export default App
