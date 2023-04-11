import "./post.scss"
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material"
import { TextsmsOutlined } from "@mui/icons-material"
import { ShareOutlined } from "@mui/icons-material"
import { MoreHoriz } from "@mui/icons-material"
import { Link } from 'react-router-dom';

const posts = [
    {
    id: 1,
    name: "Jannifer",
    userId: 1,
    profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
    id: 2,
    name: "John Woo",
    userId: 2,
    profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
];


const Post = () => {
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div class="userInfo">
                        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                        <div className="details">
                            <Link to=
                            {`/profile/$posts.userId`} 
                            style={{textDecoration:"none",color:"inherit"}}>
                                <span>Jannifer </span>
                            </Link>
                            <span className="date">12 mins ago</span>
                        </div>
                    </div>
                    <MoreHoriz/>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <img src="https://images.pexels.com/photos/5257535/pexels-photo-5257535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        <FavoriteOutlined/>
                    </div>
                    <div className="item">
                        <TextsmsOutlined/>
                    </div>
                    <div className="item">
                        <ShareOutlined/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post