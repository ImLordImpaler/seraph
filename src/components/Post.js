import React , {useState} from 'react';
import {Avatar} from '@material-ui/core'

function Post() {
    const [posts , setPost] = useState([]);
    
    return(
        <div>
            

            <div className='container posts'>
                <div className='row post__header'>
                    {/* Avatar and username*/ }
                    <Avatar className='avatar' alt = 'Dhanya' />
                    <h4>Username</h4>
                </div>
                <div className='row'>
                        {/* Image */}
                        <img 
                        className='posts__img'
                        src ='/assets/fourth.jpg' />

                </div>
                <div className='row'>
                        {/* Username + Caption + comments */}
                        <div class='post__footer'>
                            <p><strong className='post__caption'>Username</strong> Caption </p>
                            
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Post;