import React,{useState} from 'react';

export default function Contact() {
    const [data, setdata] = useState({
        name:"",
        mail:"",
        message:""
    });
    const inputEvent=(e)=>
    {
        const {name,value}=e.target;
        setdata((olddata)=>{
            return{
                ...olddata,[name]:value, 
            }
        })
    };

    const Submitform=(e)=>{
        e.preventDefault();
        alert(`name is ${data.name} email is ${data.mail} and your messages is ${data.message} `);

    };

    return (
       
       <>
       <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
         <div className="container contact-div">
            <div className="row">
                <div className=" col-md-6 col-10 mx-auto">
                    <form onSubmit={Submitform}>
                    <div className="mb-3">
                <label for="Name" className="form-label">Enter your Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={inputEvent} value={data.name}placeholder="john carter"/>
              </div>
                <div className="mb-3">
                <label for="mail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="mail" onChange={inputEvent} value={data.mail} name="mail" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="messages" onChange={inputEvent}  value={data.message} name="message" rows ="3"></textarea>
              </div>
               <div className="col-10">
               <button type="submit" class="btn btn-outline-info">Submit</button>
               </div>


                    </form>
                   </div>
                </div>
            </div>
       </>

    )
}
