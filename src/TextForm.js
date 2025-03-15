//import { colors } from "@mui/joy";
import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("");

	const handleUpClick = () => {
		setText(text.toUpperCase()); // ✅ Converts to uppercase
		props.showAlert("converted to upper case","success");
	};
	const handleLowClick = () => {
		setText(text.toLowerCase()); // ✅ Converts to uppercase
		props.showAlert("converted to lower case","success");
	};

	const handleOnChange = (e) => {
		setText(e.target.value); // ✅ Updates text state on input change
	};
	const handleOnDelete = () => {
		setText("");
		props.showAlert("message deleted","danger");
	};

	return (
		<>
			<div
				className="container"
				style={{ color: props.mode === "dark" ? "white" : "black" }}
			>
				<h1 className="mb-2">{props.heading}</h1>
				<div className="mb-3">
					<label
						htmlFor="exampleFormControlTextarea1"
						className="form-label"
					>
						{/* {props.heading} */}
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						value={text}
						onChange={handleOnChange} // ✅ Corrected function reference
						style={{
							backgroundColor:
								props.mode === "dark" ? "black" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
					></textarea>
				</div>
				<button
					disabled={text.length===0}
					className="btn btn-primary mx-3 my-3"
					onClick={handleUpClick}
				>
					Convert to Uppercase
				</button>
				<button
					disabled={text.length===0}
					className="btn btn-primary mx-3 my-3"
					onClick={handleLowClick}
				>
					Convert to lowercase
				</button>
				<button
					disabled={text.length===0}
					className="btn btn-secondary mx-3 my-3 "
					onClick={handleOnDelete}
				>
					Delete
				</button>
			</div>
			<div className="container " style={{ color: props.mode === "dark" ? "white" : "black" }} >
				<h1>Your Text Summary</h1>
				<p>
					{text.split(" ").filter((element)=>{ return element.length!==0}).length} Word and {text.length} Characters
				</p>
				<p>{0.008 * text.split(" ").filter((element=>{return element.length!==0})).length} Minutes Read</p>

				<h2>Preview</h2>
				<p>{text.length > 0 ? text: "Nothing to preview ! "}</p>
			</div>
		</>
	);
}
