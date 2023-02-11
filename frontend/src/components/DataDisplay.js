
import axios from "axios";
import { useState, useEffect } from 'react';
console.log("top")

const BASE_URL = "https://capstone-4koe.onrender.com/home"


const DataDisplay = () => {
    const [getValue, setGetValue] = useState([]);
    useEffect(() => {
        const getAllInfo = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/register/tutor/result`);
                console.log("test here")
                setGetValue(res.data)

                console.log("test 2 here")
                console.log(res.data);
                console.log("middle")



            } catch (error) {
                console.log(error);
            }
            console.log("middleend")
        }
        getAllInfo();
        // eslint-disable-next-line
    }, [])



    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <br/><br/><br/>
                            <th>First Name</th>
                            <br/><br/><br/>
                            <th>Last Name</th>
                            <br/><br/><br/>
                            <th>Phone Numb</th>
                            <br/><br/><br/>
                            <th>Email ID</th>
                            <br/><br/><br/>
                            <th>Password</th>
                            <br/><br/><br/>
                            
                            {/* <button><Link to='update'>Update Exists Employee</Link></button> */}
                        </tr>

                    </thead>
                    <tbody>

                        {getValue.map(x => <tr>
                            <td >{x._id}</td>
                            <br/><br/><br/>
                            <td>{x.firstname}</td>
                            <br/><br/><br/>
                            <td>{x.lastname}</td>
                            <br/><br/><br/>
                            <td>{x.phone}</td>
                            <br/><br/><br/>
                            <td>{x.email}</td>
                            <br/><br/><br/>
                            <td>{x.password}</td>
                            
                            


                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>

    )

}



export default DataDisplay;