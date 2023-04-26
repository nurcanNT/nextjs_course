import { useEffect, useState } from "react";
import {useRouter} from "next/router";

const UserItem = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    const {id} = router.query;

    useEffect(()=>{
        const getData = async ()=>{
            try{
             const res = await fetch("https://jsonplaceholder.typicode.com/users");
             const data = await res.json();
             setUser(data && data.find((u) => u.id === parseInt(id) ));
            }catch(err){
                console.log(err);
            }
        };
        getData(); 
    }, [id]);
    console.log(user);
  return (
    <div className='container'>
      <h1>User Item</h1>
      <p>
        <b>Full Name:</b> {user?.name}
      </p>
    </div>
  )
}

export default UserItem;
