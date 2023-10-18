import React from 'react'
export default function Navbar() {

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="https://i.pinimg.com/originals/12/34/f5/1234f5670f0ba42a6b735d9c568566b3.jpg" alt="..." />
                </div>
                <div>
                    <nav className='navbar'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/" target="_blank">Driving Schools</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="http://127.0.0.1:5500/contact.html?fname=mwkm&lname=wijssi&email=xnhwbbywb%40gmail.com&sub=nswi&message=sjqwushu"
                                target="_blank">Contact us</a></li>
                            <li><a href="/">Review</a></li>
                            <li><a href="/">Carrier</a></li>
                            <li>
                            </li>
                        </ul>
                        <div className="right">
                            <p>Dial for any Query <br />xx-xxxx88</p>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
