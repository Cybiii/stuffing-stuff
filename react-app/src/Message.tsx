function Message() {

    const info = {
        name: "Sebastian",
        age: 15,
    }
    
    if (info.name) {
        return <h1>Hello {info.name}</h1>
    }
    return <h1>Lol</h1>
}

export default Message;