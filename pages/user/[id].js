import { useEffect, useState } from "react";
import {useRouter} from "next/router";

const UserItem = ({userData}) => {
    // const [user, setUser] = useState();
    // const router = useRouter();

    // const {id} = router.query;

    // useEffect(()=>{
    //     const getData = async ()=>{
    //         try{
    //          const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //          const data = await res.json();
    //          setUser(userData && userData.find((u) => u.id === parseInt(id) ));
    //         }catch(err){
    //             console.log(err);
    //         }
    //     };
    //     getData(); 
    // }, [id, userData]);
    // console.log(user);
  return (
    <div className='container'>
      <h1>User Item</h1>
      <p>
        <b>Full Name:</b> {userData?.name}
      </p>
    </div>
  )
}

export default UserItem;

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const userData = await res.json();
    console.log(context);
    return{
        props:{
            userData,
        }
    }
}