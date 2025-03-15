//import { colors } from "@mui/joy";
//import { colors } from "@mui/joy";
//import { colors } from "@mui/joy";
//import React,{useState} from "react";

export default function About(props) {

	// const [btnText,setbtnText]=useState("enable dark mode");
	// const [myStyle,setmyStyle]=useState({
	// 	color:'white',
	// 	backgroundColor:'black'

	// })

	// let toggleStyle=()=>{
	// 	if(myStyle.color ==='white'){
	// 		setmyStyle({
	// 			color:'black',
	// 			backgroundColor:'white'
	// 		})
	// 		setbtnText("enable dark mode")
	// 	} 
	// 	else{
	// 		setmyStyle({
	// 			color:'white',
	// 			backgroundColor:'black'
	// 		})
	// 		setbtnText("enable light mode")
	// 	}
		
	// }
    //  let myStyle={
	// 	// margin:'10px',
	// 	color:'white',
    //     backgroundColor:'black',
    // }

	let myStyle ={
		color: props.mode==="dark"? "white":"black",
		backgroundColor: props.mode==="dark"? "black":"white",
		border :"0.5px solid",
		borderColor : props.mode ==="dark"?"white":"black",
	};
	return (
		<div className="container" style={myStyle}>
            <h2 className="my-3" style={{color: props.mode==="dark"? "white":"black"}}>About Us</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							style={myStyle}
						>
							Anaslyze your text
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample"
						style={myStyle}
					>
						<div className="accordion-body">
							<strong>
								This will analyze your text
							</strong>{" "}
							It is shown by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
							style={myStyle}
						>
							You dont have to pay
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
						style={myStyle}
					>
						<div className="accordion-body">
							<strong>
								This website Provides free services.
							</strong>{" "}
							It is hidden by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
							style={myStyle}
						>
							Available on all devices
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
						style={myStyle}
						
					>
						<div className="accordion-body">
							<strong>
								It is available on all devices and browsers.
							</strong>{" "}
							It is hidden by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
            {/* <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-4 mx-4">{btnText}</button>
            </div> */}
           
		</div>
	);
}
