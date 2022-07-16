import React,{useEffect,useState} from 'react'
import { SpinnerCircularFixed } from "spinners-react";
import Image from 'next/image';
import moment from "moment";

const RepositoryList = (repository) => {
    

    const [loader,setLoader] = useState(false);
    const [RepositoryDetails,setRepositoryDetails] = useState([repository]);
   

  return (
    <>
    <div className='repo-row'>
        <div className='repo-avatar'>
        <img src={RepositoryDetails[0].repository.owner.avatar_url} alt='avatar' width={100} height={100}/>
        </div>

        <div>
       <h1>{RepositoryDetails[0].repository.name}</h1>
       <p>{RepositoryDetails[0].repository.description}</p>


       <div className='repo-counts'>
        <small className='stars'>stars: {RepositoryDetails[0].repository.stargazers_count}</small>
        <br></br>
        <small className='issues'>issues: {RepositoryDetails[0].repository.open_issues_count}</small>
        <br></br>
        <small>Submitted {moment(RepositoryDetails[0].repository.created_at).fromNow()} by {RepositoryDetails[0].repository.owner.login}</small>

       </div>

       </div>
       
    </div>
    </>
  )
}

export default RepositoryList