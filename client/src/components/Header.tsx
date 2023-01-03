import {motion} from 'framer-motion'

export default function(){
	const typing: any = {
		hidden: {
			width: 0
		},
		visible: {
			width: "auto",
			transition: {
				duration: 2,
				repeat: Infinity,
				repeatType: "mirror",
				delay: .5,
				repeatDelay: 1
			}
		},
		
	}

	const blink: any = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				duration: .2,
				repeat: Infinity,
				repeatType: "mirror",
				repeatDelay: .4,
				ease: "linear"
			}
		}
	}

	return (
		<header>
			<nav className="flex  m-auto items-end gap-1">
				<motion.h4 variants={typing} animate="visible" initial="hidden" className="font-medium text-[17.5px] font-['Martian_Mono'] text-clip overflow-hidden whitespace-nowrap">artificial intelligence </motion.h4><motion.div variants={blink} animate="visible" initial="hidden" className="h-1.5 w-6 bg-white" />
			</nav>
		</header>
	)
}