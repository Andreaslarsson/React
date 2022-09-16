import React, { useEffect, useState } from "react"

export const Form = ({ formTitle }) => {
	const [name, setName] = useState("")


	const [docTitle, setDocTitle] = useState(``)

	useEffect(() => {
		document.title = docTitle
	}, [docTitle])

	const [] = useState(true)

	return (
		<div>
			<h2>{formTitle}</h2>
			<input
				type="text"
				placeholder="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setDocTitle(`Hello, ${name}`)}>Enter</button>

			
		</div>
	)
}


