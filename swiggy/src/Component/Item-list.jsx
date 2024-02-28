const ItemList=(props)=>{
    const{item}=props
    return(
        <div className="item-container">
            <div>
                {item.card.info.name}-{item.card.info.price/100}
            </div>
            <div>{item.card.info.description}</div>
        </div>
    )
}
export default ItemList