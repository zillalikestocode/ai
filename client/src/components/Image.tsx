import {useState} from 'react'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

export default function(){
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(false)
	const size = 512
	const initialState = {
		prompt: '',
		number: '',
		size: 'small'
	}
	const [details, setDetails] = useState(initialState)
	const handleChange = (e: any)=>{
		setDetails({...details, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e: any)=> {
		e.preventDefault()
		try {
			setLoading(true)
			setImages([])
			const response = await axios.post("https://zilla-ai.onrender.com/image/generate", details)
			setImages(response.data.images)
			setLoading(false)
		}catch (err){
			setLoading(false)
			console.log(err)
		}
	}

	return (
		<div className="mt-16">
			<form action="" onSubmit={(e)=> handleSubmit(e)} className="flex gap-3 flex-col items-center justify-center">
			<div className="flex flex-col gap-3">
				<input required type="text" name="prompt" onChange={(e)=> handleChange(e)} value={details.prompt} placeholder="Enter a Prompt" className="w-60 rounded-full bg-[#121212] px-5 py-2 placeholder:text-white/25 focus:outline-none text-white/75"/>
				<input required type="number" name="number" onChange={(e)=> handleChange(e)} value={details.number} placeholder="Amount" min="1" max="10" className="w-32 rounded-full placeholder:text-sm bg-[#121212] px-5 py-2 placeholder:text-white/25 focus:outline-none text-white/75"/>
			<div className="text-left flex gap-2 ml-3">
				<h4>size:</h4>
				<select name="size" onChange={(e)=> handleChange(e)} id="" className="bg-[#121212]">
					<option value="small">small</option>
					<option value="medium">medium</option>
					<option value="large">large</option>
				</select>
			</div>
			</div>
			<button type="submit"  className="image px-5 p-2 rounded-full">generate</button>
			</form>
			<div className="flex items-center gap-5 mt-10 flex-col justify-center">
				{loading && <HashLoader color="#fff" />}
				{images.length !== 0 && <h4>Results:</h4>}
				{
					images?.map((item: any)=>{
						return (
							<img src={item?.url} />
						)
					})
				}
			</div>
		</div>
	)
}