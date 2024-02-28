import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCategory from "./ItemCategory"


const ResDetail =()=>{
    const params = useParams()
    const[details,setDetails]=useState({})
    const[categories,setCategories]=useState([])

    useEffect(() => {
        FetchDetails();
    }, [])

    const FetchDetails = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId='+params.resid);
        const json = await res.json()
        // setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

        const details = json.data.cards[4].card.card.info
        const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        setDetails(details);


        const filteredCategories=categories.filter((item)=>
        {

          return item.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        setCategories(filteredCategories)
        console.log(filteredCategories);
      }
        if(Object.keys (details).length===0)
          {
            return <div>Loading...</div>
          }

    return(
      <Link to={'/restaurants/res'}>
        <h2>{details.name}</h2>
        <div>{details.cuisines.join(', ')}</div>
        <div>{details.areaName}</div>
        {categories.map((res) => {
              return <ItemCategory key={res.card.card.title} category={res} />
        })}
      </Link>
    )
    }

export default ResDetail