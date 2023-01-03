import {Link} from 'react-router-dom'

export default function (){
	return (
		<div className="h-full mt-16 justify-center flex flex-col gap-5 items-center ">
			<div className="text-center w-64  text-white/75 text-lg">
				<p>Welcome to the world of Artificial Intelligence. Get AI driven results and answers to your questions in speed considered supernatural.</p>
			</div>
			<div className="flex gap-3 flex-col items-center">
				<Link to="/image-generator"><button className="text-lg font-medium image rounded-full p-3 px-5">Image generator</button></Link>
				<hr className="w-16 opacity-[.25]"/>
				<button className="text-lg font-medium bg-slate-800 text-white/50 rounded-full p-3 px-5" disabled>Chatbot</button>
			</div>
		</div>
	)
}