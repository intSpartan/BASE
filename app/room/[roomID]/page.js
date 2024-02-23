import { Suspense } from "react";
import Webcams from "./Webcams"
import styles from './page.module.css'
import CopyButton from "./CopyButton"
import Loading from "./loading";
import Link from 'next/link';

function Room({params}) {
    console.log(params)

    return (
        <section className={styles.container}>
            <Suspense fallback={<Loading />}>
                <Webcams roomID={params.roomID}/>
            </Suspense>
            <div className={styles.linkField}>
                <CopyButton roomID={params.roomID}/>
                <Link href="/">End meeting</Link>
            </div>
        </section>
    )
}

export default Room