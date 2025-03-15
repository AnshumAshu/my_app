import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import React,{useState} from "react";
import Alert  from "./Alert";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
	const [mode,setMode]=useState('light');
	const [alert,setAlert]=useState(null);

	const showAlert=(message,type)=>{
		setAlert({
			msg:message,
			type:type,
		})

		setTimeout(()=>{
			setAlert(null);
		},2000)
	}



	const toggleMode=()=>{
		if(mode==='light'){
			setMode('dark');
			document.body.style.backgroundColor='black';
			showAlert("Dark mode turned on","success")
		}
		else{
			setMode('light')
			document.body.style.backgroundColor='white';
			showAlert("Light mode turned on","success")
		}
	}




	//functionl based
	//N based components this keyword (difficult) so we use functional based
	//rfc
	//props:properties
	//{}==for variables
	return (
		<>
	{/* home /user/account ==(existing)
		home /user/account/user1 ==( not existing)
	*/}
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={
					<>
						
						<Navbar title="Ashu" link="links" mode={mode} toggleMode={toggleMode}/>
						<Alert alert={alert}/>
						<TextForm showAlert={showAlert} heading="Ashu - Word converter Charecter converter Time counter" mode={mode} />
						
					</>
					}/>
				<Route exact path='/About' element={
					<>
						<Navbar title="Ashu" link="links" mode={mode} toggleMode={toggleMode}/>
						<Alert alert={alert}/>
						<About mode={mode}/>
					</>
					}/>
			</Routes>
		
		</BrowserRouter>

			{/* <Navbar title="Ashu" link="links" mode={mode} toggleMode={toggleMode}/> */}
			{/* <Alert alert={alert}/>
			<TextForm showAlert={showAlert} heading="Enter the text to modify" mode={mode} />
			<About/> */}
		</>
	);
}
export default App;
