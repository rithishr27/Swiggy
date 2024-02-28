import ResCard from './Res-Card';
import { useEffect,useState } from 'react';

const ResContainer = () => {

    const [restaurants , setRestaurants] = useState([])
    const [list , setList] = useState([]);

    useEffect( () => {
      fetchData()
    },[])

    const fetchData = async() => {
      const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await res.json();
      console.log(json);
      setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filterTopRes = () => {
      console.log("Filtering...!!!");
      const result = restaurants.filter((res) => {
        return res.info.avgRatingString > "4.4"
      })
      console.log(result);
      setList(result);
    }

    const [searchText , setSearchText] = useState('');
    
    const SearchRes = (value) => {
      const result = restaurants.filter((res) => {
        const resName = res.info.name.toLowerCase()
        return  resName.includes(value.toLowerCase())
      })
      setList(result);
    }

    const updateSearch = (e) =>{
      setSearchText(e.target.value);
      SearchRes(e.target.value);
    }

    if(restaurants.length===0)
    {
      return <div>Loadingg....</div>
    }

    return(
      <>
        <div className='restaurant-container'>
          <div style={{textAlign:"center" ,fontSize:"30px"}}>
            <input  style={{marginTop:"100px",borderRadius:"10px"}} type="text" value={searchText} onChange={updateSearch} placeholder='Search '/>
            {/* <button style={{border:"none"}} onClick={SearchRes}>Search</button> */}
          </div>
          <div>
            <button onClick={filterTopRes}>Top Restaurants</button>
          </div>
          <div className='card'>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((res) => <ResCard key={res.info.id} restaurant={res.info} />)
          ) : (
            <div>No restaurants found.</div>
          )}
          </div>
        </div>
      </>
    ) 
}

export default ResContainer; 