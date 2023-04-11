// import { useContext } from "react"
import "./stories.scss"

const Stories = () => {

    // const {currentUser} = useContext(AuthContext)

    // Temporary
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/1382156/pexels-photo-1382156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/1297465/pexels-photo-1297465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ]

    return (
        <div className="stories">
            {/*<div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>*/}
            {stories.map(story=>(
                <div className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories