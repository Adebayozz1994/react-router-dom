import axios from "axios"
import { useEffect, useState } from "react"

const ApiBackend = () => {
    let URL = "http://localhost:3000/login"
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(URL)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    
    }, [])
    
  return (
    <div>
        {
            data.map((item, index)=>(
                <div key={index}>
                    <section className="flex flex-row gap-10">
                    <div>
                    <h1>{item.name}</h1>
                    </div>
                    <div>
                        <h3>{item.username}</h3>
                    </div>

                    </section>
                </div>

            ))}
    </div>
  )
}

export default ApiBackend