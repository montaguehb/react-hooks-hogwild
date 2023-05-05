import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs"
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [hogsArr, setHogsArr] = useState(hogs)
	const [filter, setFilter] = useState({
		name: "",
		weight: "",
		greased: false
	})
	const handleFilter = (e) => {
		setFilter({
			...filter,
			[e.target.id]: e.target.value
		})
	}
	const handleClick = () => {
		setFilter(currentVal => {
			return {
				...currentVal,
				greased: !currentVal.greased
			}
		})
	}
	return (
		<div className="App">
			<Nav />
			<Filter handleFilter={handleFilter} handleClick={handleClick} filter={filter}/>
			<Hogs hogs={hogsArr} filter={filter}/>
		</div>
	);
}

export default App;
