"use client"
import { useState } from "react";
import styles from './page.module.css'

function CopyButton({roomID}) {
	const [clicked, setClicked ] = useState(false)

	function handleOnClick(){
		navigator.clipboard.writeText(`https://video-chat-nextjs-socket-nick.vercel.app/room/${roomID}`)
		setClicked(true)
		setTimeout(()=>setClicked(false),500)
	}
	return (
		<button className={styles.copyButton} onClick={handleOnClick}>
			{clicked? "Copied" : "Copy link"}
		</button>
	)
}

export default CopyButton