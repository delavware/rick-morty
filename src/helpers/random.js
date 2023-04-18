const getRandomDimension = () => {
    //from 1 to 126, representing each dimension
    //cumpolsory to add +1 at the end to start with 1 to 126
    return Math.floor(Math.random() * 126) + 1
}

export default getRandomDimension