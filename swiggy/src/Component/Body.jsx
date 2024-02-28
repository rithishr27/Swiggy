const Body = (props) => {

    const name = "Tony";
    return(
      <>
        <h3>Body Component</h3>
        <h3>Name : {name}</h3>
        <h3>Age : {props.age}</h3>
      </>
    )
}

export default Body;