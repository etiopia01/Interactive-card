import { useEffect, useState } from 'react'

export default function Form({ update }) {
	const [cardData, setCardData] = useState({
		name: '',
		number: '',
		month: '',
		year: '',
		cvc: '',
	})

	const [valid, setValid] = useState({
		name: true,
		number: true,
		month: true,
		year: true,
		cvc: true,
	})
	const [error, setError] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = e => {
		setCardData(prev => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	const regName = /[^a-zA-Z\s]+/g
	const regNum = /\d{16}/g
	const regMonth = /0[1-9]|1[0-2]/
	const regYear = /[0-9]{2}/
	const regCvc = /[0-9]{3}/

	const handleSubmit = e => {
		let error = false
		e.preventDefault()
		Object.keys(cardData).forEach(key => {
			if (!validate(key, cardData[key])) {
				setValid(prev => ({ ...prev, [key]: false }))
				setError(true)
				error = true
			}
			console.log(valid)
		})

		if (!error) {
			setError(false)
			setSubmitted(true)
			update(cardData)
		}
	}

	function validate(key, value) {
		switch (key) {
			case 'month':
				return value && regMonth.test(value)
			case 'name':
				return value && !regName.test(value)
			case 'number':
				return value && regNum.test(value)
			case 'year':
				return value && regYear.test(value)
			case 'cvc':
				return value && regCvc.test(value)
		}
	}

	if (!error && submitted) {
		return <div>Thank you!</div>
	}

	return (
		<form onSubmit={handleSubmit} className='card-form'>
			<label htmlFor='name'>CARDHOLDER NAME</label>
			{!valid.name && <span className='not-valid'>name not valid</span>}
			<input
				placeholder='John Doe'
				onChange={handleChange}
				className={`input-top ${!valid.name ? 'input-error' : ''}`}
				type='text'
				name='name'
				/* onBlur={(e)=> !validate(e.target.name, e.target.value) ? setError(prev => {...prev, errorName: true})} */
				id='name'
				value={cardData.name}
			/>
			{/* {errorName && <p></p>} */}
			<label htmlFor='number'>CARD NUMBER</label>
			{!valid.number && <span className='not-valid'>number not valid</span>}
			<input
				placeholder='1234 1234 1234 1234'
				onChange={handleChange}
				className='input-top'
				type='text'
				name='number'
				id='number'
				value={cardData.number}
			/>
			<div className='labels'>
				<label htmlFor='data'>EXP. DATE (MM/YY)</label>
				<label htmlFor='cvc'>CVC</label>
			</div>
			<div className='date'>
				<input
					placeholder='01'
					onChange={handleChange}
					className='input-date'
					type='text'
					name='month'
					id='data'
					value={cardData.month}
				/>

				<input
					placeholder='23'
					onChange={handleChange}
					className='input-date'
					type='text'
					name='year'
					id='data'
					value={cardData.year}
				/>

				<input
					placeholder='123'
					onChange={handleChange}
					className='input-cvc'
					type='number'
					name='cvc'
					id='cvc'
					value={cardData.cvc}
				/>
				{!valid.cvc && <span className='not-valid'>cvc not valid</span>}
			</div>

			<button type='submit'>Confirm</button>
		</form>
	)
}
