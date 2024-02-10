import React from 'react';
import mic from '../assets/mic.png';
import js from '../assets/js.png'
import html from '../assets/html.png';
import css from '../assets/css.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import image from '../assets/image.png';
import Link from 'next/link'


function LangList(props) {
        return (
                <>
                        <div className="LangContainer">
                                <div className="langSection languages">
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolorjs}` }}>
                                                <Link href="editor/javascript"><img src={js} alt="JLanguage " /></Link>
                                                {/* <a href="//javascript"><img src={js} alt="JLanguage " /></a> */}
                                        </div>
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolorhtml}` }}>
                                                <Link href="/html"><img className={props.html} src={html} alt="Language " /></Link>
                                        </div>
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolorpy}` }}>
                                                {/* <a href="//python"><img className={props.py} src={python} alt="Language "  /></a> */}
                                                <Link href="/python"><img className={props.py} src={python} alt="Language " /></Link>
                                        </div>
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolorhtml}` }}>
                                                <Link href="/css"><img className={props.html} src={css} alt="Language " /></Link>
                                        </div>
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolordart}` }}>
                                                <Link href="/java"><img className={props.dart} src={java} alt="Language " /></Link>
                                                {/* <a href="//java"><img className={props.dart} src={java} alt="Language "/></a> */}
                                        </div>
                                </div>
                                <div className="FeatureSection languages">
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolorv}` }}>
                                                <Link href="/voice2text"><img src={image} alt="feature " /></Link>
                                        </div>
                                        <div className="languageBorder" style={{ 'backgroundColor': `${props.leftcolori}` }}>
                                                <Link href="/image2text"><img src={mic} alt="feaute" /></Link>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default LangList