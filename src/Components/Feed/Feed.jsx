/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import "./Feed.css"

// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'
// import thumbnail3 from '../../assets/thumbnail3.png'
// import thumbnail4 from '../../assets/thumbnail4.png'
// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import {API_KEY, value_converter}  from '../../data'
import moment from 'moment'

// eslint-disable-next-line react/prop-types
const Feed = ({category}) => {

   const[data,setData] =useState([]);

   const fetchData = async () =>{
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`

      // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
      
      await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
   }
   
   useEffect(()=>{
      fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[category])

  return (
     <div className="feed">
        {data.map((item, index) => {
           return (
              // eslint-disable-next-line react/jsx-key
              <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                 <img src={item.snippet.thumbnails.medium.url} alt="" />
                 <h2>{item.snippet.title}</h2>
                 <h3>{item.snippet.channelTitle}</h3>
                 <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
              </Link>
           )
        })}

     </div>
    
  )
}

export default Feed