import React, { useState} from 'react';

function TestLink() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [filled, setFilled] = useState(false);


    const handleClear = () => {
        setFilled(false)
          // Clear the input fields
        setUserName("");
        setUserEmail("");
        setUserPhone("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        // Check the user-entered values
        if (!userName || !userEmail || !userPhone) {
            alert('Please fill in all fields.');
            return;
        }
        else {
         
            // You can perform other validation or submit the data to a server here.
           
            console.log('Name:', userName);
            console.log('Email:', userEmail);
            console.log('Phone:', userPhone);
            setFilled(true);
            //handleClear();

         

        }

      
    }

  

    return <>

        
        
     
       
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputName">Name</label>
                <input onClick={handleClear} onChange={(e) => setUserName(e.target.value)} value={userName} type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" />


            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Phone Number</label>
                <input onChange={(e) => setUserPhone(e.target.value)} value={userPhone} type="tel" className="form-control" id="exampleInputPassword1" placeholder="Phone"/>
            </div>
         
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary ">Submit</button>

            </div>
        </form>


        {
            filled && (<>

                <div>
                    <div><h3>User Data!</h3></div>
                    <table style={{ borderCollapse:"collapse" }} >
                        <tr style={{ border: "1px solid green" }}>
                            <th style={{ border: "1px solid green", padding:"20px" }}>Name</th>
                            <th style={{ border: "1px solid green", padding: "20px" }}>Email</th>
                            <th style={{ border: "1px solid green", padding: "20px" }}>Phone</th>
                        </tr>
                        <tr style={{ border: "1px solid green" }}>
                            <td style={{ border: "1px solid green", padding: "20px" }}>{userName}</td>
                            <td style={{ border: "1px solid green", padding: "20px" }}>{userEmail}</td>
                            <td style={{ border: "1px solid green", padding: "20px" }}>{userPhone}</td>

                        </tr>

                    </table>

                </div>




            </>
            )
        }

    </>;
}

export default TestLink;

