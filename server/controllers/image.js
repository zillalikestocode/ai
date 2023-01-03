require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateImage (req, res){
	const {prompt, number, size} = req.body

	const imageSize = size === "small" ? '256x256' : size === "medium" ? '512x512' : "1024x1024"

	try {
		const response = await openai.createImage({
			prompt,
			n: Number(number),
			size: imageSize
		})

		return res.status(200).json({images: response.data.data})
	}catch(err){
		res.status(500).json({message: "Could not generate image"})
	}
}

module.exports = {generateImage}