import React from 'react'
import { useEffect, useState } from 'react'

function Example() {
	const API_URL = 'https://jsonplaceholder.typicode.com/todos'

	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const [count, setCount] = useState({ number: 0, color: 'rainbow' })
	const [toggle, setToggle] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		fetch(API_URL)
			.then(res => res.json())
			.then(res => {
				setItems(res)
				setIsLoading(false)
			})

		console.log(toggle, 'eseguito')
		setToggle(prev => !prev)
	}, [count.number])

	if (isLoading) {
		return <span>Loading...</span>
	}

	return (
		<>
			<span style={{ color: toggle ? 'green' : 'red' }}>I'm the toggle</span>
			<span>{count.number}</span>
			<button
				onClick={() => setCount(prev => ({ ...prev, number: prev.number + 1 }))}
			>
				+
			</button>
			{!isLoading && items.map(item => <div key={item.id}>{item.title}</div>)}
		</>
	)
}
export default Example
