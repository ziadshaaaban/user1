import Side from './side';
import './styles/database.css'
import Header from "./header";
import React, { useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Database() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])
    const [test, setTest] = useState('')
    const [notm, setNotm] = useState('')
    const pers = {
        "_id": "NAN",
        "first_name": "NAN",
        "last_name": "NAN",
        "gender": "NAN",
        "company_name": "NAN",
        "address": "NAN",
        "city": "NAN",
        "county": "NAN",
        "phone1": "NAN",
        "phone2": "NAN",
        "email": "NAN",
        "web": "NAN",
        "fingers": [
            "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN",]
        , "previousCrimes": [
            {
                "_id": "NAN",
                "Crimes": [
                    {
                        "crime1": "NAN",
                        "Date of the crime": "NAN",
                        "Country of the crime": "NAN",
                        "Address of the crime": "NAN",
                        "Years in prison": "NAN"
                    }
                ]

            }
        ]
    }
    const mat = { "result": "NAN" }

    const [matchth, setMatchth] = useState(pers)
    const [matchtwo, setMatchtwo] = useState(mat)

    const [data, setData] = useState([]);
    const [mees, setMEs] = useState('NOt Found');
    const [ii, setII] = useState('NAN');


    let token = localStorage.getItem("token")
    let uid = localStorage.getItem("userId")
    const fetchData = (uid) => {
        setIsLoading(true)
        setThird({ isThird: false });


        fetch(`https://backendssh.vercel.app/website/transactions/user/` + uid, {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => response.json())
            .then((actualData) => {
                setThird({ isThird: true });

                if (actualData.transaction) {
                    setII(data._id)


                    setData(actualData.transaction);
                }
                if (actualData.message) {
                    setMEs(actualData.message)
                }
                setIsLoading(false)
            })
            .catch((err) => {
            });
    };

    useEffect(() => {
        fetchData(uid);
    }, []);

    const [register, setRegister] = useState({
        isRegister: false
    });
    const [usersd, setUserd] = useState([]);

    const [userkey, setUserkey] = useState('');
    const [geender, setGeender] = useState('')
    async function takekey(key) {
        setUserkey(key)
    }
    async function search(userkey) {
        setIsLoading2(true)
        setSec({ isSec: false });

        fetch(`https://backendssh.vercel.app/website/transactions/` + userkey, {
            method: "get", headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            })
            .then((userData) => {
                setSec({ isSec: true });

                setUserd(userData.transaction)
                setGeender(userData.transaction.informationEstimated)
                setTest(userData.transaction.transactionType)
                setNotm(userData.transaction.result)

                if (userData.transaction.isMatched) {
                    setMatchtwo(userData.transaction.isMatched)

                }


                if (userData.transaction.PersonMatched) {
                    setMatchth(userData.transaction.PersonMatched);
                }
                setIsLoading2(false)
            })
            .catch((err) => {
                alert("Transction Not Found")
                let duta = {
                    "_id": "NAN",
                    "user": "NAN",
                    "userId": "NAN",
                    "transactionType": "NAN",
                    "transactionImagePath": "NAN",
                    "result": "NAN",

                }
                let gg = {
                    "gender": "NaN",
                    "male_percentage": 0,
                    "female_percentage": 0,
                    "hand_position": "NAN",
                    "right_percentage": 0,
                    "left_percentage": 0,
                    "gender": "NaN",
                    "male_percentage": 0,
                    "female_percentage": 0,
                    "hand_position": "NAN",
                    "right_percentage": 0,
                    "left_percentage": 0,
                    "Finger_name": "NAN",
                    "Thump_percentage": 0,
                    "Little_percentage": 0,
                    "Ring_percentage": 0,
                    "Index_percentage": 0,
                    "Middle_percentage": 0
                }
                setGeender(gg)
                setUserd(duta)
            });
        fetchData()

    }; function onClear() {
        setUserkey("")
        toggleShow(false)
        setMatchth(pers)
        setMatchtwo(mat)
        setIsLoading(true)
    } const [id, setId] = useState("")

    function know(_id) {
        setId(_id)

        search(_id)

    }
    const [show, toggleShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);

    const [sec, setSec] = useState({
        isSec: false
    });
    const [third, setThird] = useState({
        isThird: false
    });
    return (
        <>

            {!register.isRegister ?

                <div  >
                    {!third.isThird ?
                        <div ><div >
                            {isLoading ? (<>
                                <div className="blncen">
                                    <div className="blending-spinnerr"></div>

                                </div>
                                <div className="blncen2">

                                    <h3 className='cenn paragraph'>Please wait It will take a while! </h3>
                                </div>

                            </>
                            ) : null}</div></div> :
                        <div>

                            {mees === "there is no transaction found!" ?


                                <div className="alert warning-alert alrt">
                                    <h3 className="headingg" >{mees}</h3>
                                </div> : null}

                            <div >
                                {data.length === 0 ?

                                    <div className="alert warning-alert alrt">
                                        <h3 className="headingg"  >No Transction Found</h3>
                                    </div>

                                    :
                                    <div className="split right">
                                        <div className='fieldse' >

                                            <div className="bl"> </div><div className="app">
                                                {isLoading ? (<>
                                                    <div className="loading-screen"></div>

                                                    <div className="blending">
                                                        <div className="blending-spinner"></div>
                                                        <h3 className="headingg cenn" >Please wait It will take a while! </h3>

                                                    </div>

                                                </>
                                                ) : null}</div>
                                            <div className="table-responsive">


                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>User</th>
                                                            <th>Transition Type</th>
                                                            <th>Time</th>

                                                            <th>View</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        {
                                                            data.reverse().map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className="user-info">

                                                                            <div className="user-info__basic">
                                                                                <h5 className="mb-0 speacail">{item.user}</h5>
                                                                                <p className="text-muted mb-0  speacail">{item._id}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="user-info">

                                                                            <div className="user-info__basic">
                                                                                <h5 className="mb-0 speacail "> {item.transactionType}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td> <div className="user-info">

                                                                        <div className="user-info__basic">
                                                                            <h5 className="speacail mb-0"> {item.confirmationTime}</h5>
                                                                        </div>
                                                                    </div></td>
                                                                    <td>
                                                                        <button className="btn btn-primary btn-sm bu" onClick={() => {
                                                                            setRegister({ isRegister: true }); know(item._id);
                                                                        }}>View Report</button>
                                                                    </td><td>
                                                                    </td>

                                                                </tr>))
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div  >}
                            </div></div>}</div>
                :


                <div>
                    {!sec.isSec ?
                        <div ><div className="blr"> </div><div className="appr">
                            {isLoading ? (<>
                                <div className="blncen">
                                    <div className="blending-spinnerr"></div>

                                </div>
                                <div className="blncen2">

                                    <h3 className='cenn paragraph'>Please wait It will take a while! </h3>
                                </div>

                            </>
                            ) : null}</div></div>
                        :
                        <div>

                            {((test === 'one{Compare with people have previous crimes}' || test === 'Three{Compare with global DB}') & notm === 'not matched') ?
                                <div>


                                    <div className="cont">
                                        <CloseButton aria-label="Hide" onClick={() => { fetchData(uid); onClear(); setRegister({ isRegister: false }) }} className="clos" />


                                        <img className='round' src={image1} alt="preview" />


                                        <div>  <h4 className="headingg" > Result : Not Match</h4>
                                            <h5 className="headingg" > User : {usersd.user} </h5>

                                            <h5 className="headingg" > transactionType : {usersd.transactionType} </h5>

                                            <br></br>
                                            <div className="buttons">

                                                {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                <br></br>
                                            </div>                                                <br></br>

                                        </div>

                                        <div className="skills">
                                            <h1 className="headingg lon"  >INFO !</h1>
                                            <hr className="headingg" />
                                            <ul>
                                                <li>Gender : {geender.gender}</li>
                                                <li>Male percentage : {geender.male_percentage}</li>
                                                <li> Female Percentage : {geender.female_percentage} </li>
                                                <li>Hand Position : {geender.hand_position} </li>
                                                <li> Right Percentage : {geender.right_percentage} </li>
                                                <li>  Left Percentage : {geender.left_percentage} </li>

                                                <li>Finger Name : {geender.Finger_name}</li>
                                                <li>Thumb percentage : {geender.Thump_percentage}</li>
                                                <li> Little Percentage : {geender.Little_percentage} </li>
                                                <li>Ring Position : {geender.Ring_percentage} </li>
                                                <li> Index Percentage : {geender.Index_percentage} </li>
                                                <li>  Middle Percentage : {geender.Middle_percentage} </li>
                                            </ul>
                                        </div>

                                        <br></br>
                                    </div>

                                </div> : null
                            }
                            <div>




                                <div>
                                    {((test === 'one{Compare with people have previous crimes}') & notm === 'matched') ?
                                        <div>
                                            <div className="cont">
                                                <CloseButton aria-label="Hide" onClick={() => { fetchData(uid); onClear(); setRegister({ isRegister: false }) }} className="clos" />

                                                <img className='round' src={image1} alt="preview" />


                                                <div>  <h4 className="headingg"  > Result :  Match</h4>
                                                    <h4 className="headingg"  > User : {usersd.user} </h4>

                                                    <h4 className="headingg"  > transactionType : {usersd.transactionType} </h4>

                                                    <br></br>
                                                    <div className="buttons">

                                                        {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                        <br></br>
                                                    </div>                                                <br></br>

                                                </div>
                                                <div className="skills">
                                                    <h1 className="headingg lon" >INFO !</h1>
                                                    <hr className="headingg" />

                                                    <span > <p className="paragraph">{"Name : "}{matchth.first_name} {matchth.last_name}</p><br /></span>
                                                    <p className="paragraph">{"Gender  : "}{matchth.gender}</p><br />

                                                    <span className=''>  <p className="paragraph">{"Company Name : "}{matchth.company_name}</p><br /></span>
                                                    <p className="paragraph">{"Address : "}{matchth.address}</p><br />

                                                    <p className="paragraph">{"City : "}{matchth.city}</p><br />
                                                    <p className="paragraph">{"County : "}{matchth.county}</p><br />


                                                    <p className="paragraph">{"Phone1 : "}{matchth.phone1}</p><br />
                                                    <p className="paragraph">{"Phone2 : "}{matchth.phone2}</p><br />
                                                    <p className="paragraph">{"E-mail : "}{matchth.email}</p><br />
                                                    <p className="paragraph">{"Web : "}{matchth.web}</p><br />

                                                    <h1 className="headingg"  >Crimes</h1>

                                                    {matchth.previousCrimes.map((item, index) => (
                                                        <div key={index}>

                                                            <p className="paragraph">{"ID : "}{item._id}</p><br />

                                                            {item.Crimes.map((item, index) => (
                                                                <div key={index}>
                                                                    <p className="paragraph">{"Crimes : "}{item.crime1}</p><br />

                                                                    <p className="paragraph">{"Date of the crime: "}{item["Date of the crime"]}</p><br />

                                                                    <p className="paragraph">{"Country of the crime: "}{item["Country of the crime"]}</p><br />
                                                                    <p className="paragraph">{"Address of the crime: "}{item["Address of the crime"]}</p><br />
                                                                    <p className="paragraph">{"Years in prison: "}{item["Years in prison"]}</p><br />

                                                                </div>))}



                                                        </div>))}


                                                    <h1 className="headingg"  >Fingers</h1>
                                                    <div className="image-wrapper">

                                                        {matchth.fingers.map((item, index) => (
                                                            <div key={index}>

                                                                <div className="media">
                                                                    <div className="overlay"></div>
                                                                    <img src={item} alt="" />
                                                                    <div className="image-details">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>



                                                </div></div>

                                        </div>
                                        : null
                                    }</div>


                                <div>
                                    {((test === 'Three{Compare with global DB}') & notm === 'matched') ?
                                        <div>


                                            <div className="cont">
                                                <CloseButton aria-label="Hide" onClick={() => { fetchData(uid); onClear(); setRegister({ isRegister: false }) }} className="clos" />


                                                <img className='round' src={image1} alt="preview" />

                                                <div>  <h4 className="headingg" > Result :  Match</h4>
                                                    <h5 className="headingg" > User : {usersd.user} </h5>

                                                    <h5 className="headingg" > transactionType : {usersd.transactionType} </h5>

                                                    <br></br>
                                                    <div className="buttons">

                                                        {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                        <br></br>
                                                    </div>                                                <br></br>

                                                </div>



                                                <div className="skills">
                                                    <h1 className="headingg lon" >INFO !</h1>
                                                    <hr className="headingg" />


                                                    <span className=''> <p className="paragraph">{"Name : "}{matchth.first_name} {matchth.last_name}</p><br /></span>
                                                    <p className="paragraph">{"Gender  : "}{matchth.gender}</p><br />

                                                    <span className=''>  <p className="paragraph">{"Company Name : "}{matchth.company_name}</p><br /></span>
                                                    <p className="paragraph">{"Address : "}{matchth.address}</p><br />

                                                    <p className="paragraph">{"City : "}{matchth.city}</p><br />
                                                    <p className="paragraph">{"County : "}{matchth.county}</p><br />


                                                    <p className="paragraph">{"Phone1 : "}{matchth.phone1}</p><br />
                                                    <p className="paragraph">{"Phone2 : "}{matchth.phone2}</p><br />
                                                    <p className="paragraph">{"E-mail : "}{matchth.email}</p><br />
                                                    <p className="paragraph">{"Web : "}{matchth.web}</p><br />


                                                    <h1 className="headingg" >Fingers</h1>
                                                    <div className="image-wrapper">

                                                        {matchth.fingers.map((item, index) => (
                                                            <div key={index}>

                                                                <div className="media">
                                                                    <div className="overlay"></div>
                                                                    <img src={item} alt="" />
                                                                    <div className="image-details">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div></div></div>


                                        : null
                                    }</div>

                            </div>
                            <div>
                                {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Not match') ? <div>
                                    <div className="cont">

                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


                                        <img className='round' src={image1} alt="preview" />


                                        <img className='round' src={image2} alt="preview" />

                                        <div>  <h4 className="headingg" > Result : Not Match</h4>
                                            <h5 className="headingg" > User : {usersd.user} </h5>

                                            <h5 className="headingg" > transactionType : {usersd.transactionType} </h5>

                                            <br></br>
                                            <br></br>

                                        </div>

                                    </div>


                                </div> : null
                                }</div>
                            <div>
                                {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Match') ? <div>

                                    <div className="cont">

                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                        <img className='round' src={image1} alt="preview" />


                                        <img className='round' src={image2} alt="preview" />

                                        <div>  <h4 className="headingg" > Result :  Match</h4>
                                            <h5 className="headingg" > User : {usersd.user} </h5>

                                            <h5 className="headingg" > transactionType : {usersd.transactionType} </h5>

                                            <br></br>
                                            <br></br>

                                        </div>


                                    </div>

                                </div> : null
                                }</div>


                            <div>

                                {(test === "Four{Get Estimated Information's From FingerPrint Like (GENDER , HAND, FINGER)}") ? <div>


                                    <div className="cont">
                                        <CloseButton aria-label="Hide" onClick={() => { fetchData(uid); onClear(); setRegister({ isRegister: false }) }} className="clos" />

                                        <img className='round' src={image1} alt="preview" />

                                        <div>
                                            <h5 className="headingg" > User : {usersd.user} </h5>

                                            <h5 className="headingg" > transactionType : {usersd.transactionType} </h5>

                                            <br></br>
                                            <div className="buttons">


                                                <br></br>
                                            </div>                                                <br></br>

                                        </div>

                                        <div className="skills">
                                            <h1 className="headingg lon"  >INFO !</h1>
                                            <hr className="headingg" />
                                            <ul>
                                                <li>Gender : {geender.gender}</li>
                                                <li>Male percentage : {geender.male_percentage}</li>
                                                <li> Female Percentage : {geender.female_percentage} </li>
                                                <li>Hand Position : {geender.hand_position} </li>
                                                <li> Right Percentage : {geender.right_percentage} </li>
                                                <li>  Left Percentage : {geender.left_percentage} </li>

                                                <li>Finger Name : {geender.Finger_name}</li>
                                                <li>Thumb percentage : {geender.Thump_percentage}</li>
                                                <li> Little Percentage : {geender.Little_percentage} </li>
                                                <li>Ring Position : {geender.Ring_percentage} </li>
                                                <li> Index Percentage : {geender.Index_percentage} </li>
                                                <li>  Middle Percentage : {geender.Middle_percentage} </li>
                                            </ul>
                                        </div>

                                        <br></br>
                                    </div>

                                </div> : null
                                }</div>

                        </div>
                    }
                </div>





            }

        </>
    );
}
