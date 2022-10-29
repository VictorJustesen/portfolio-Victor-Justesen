import Jeger from "./components/jeger.js"
import Header from "./components/header.js"
import Aboutme from "./components/aboutme.js"
import Makeownsite from "./components/makeownsite.js"
import Skills from "./components/skills.js"
import Contact from "./components/contact.js"

function App() {
	return (
		<div className='App'>
			<Header />
			<Jeger />
			<Makeownsite/>
			<Aboutme/>
			<Skills/>
			<Contact/>
			
		</div>
	);
}

export default App;
