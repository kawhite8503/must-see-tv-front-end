import styles from './ProfileCard.module.css'
import {  Link  } from 'react-router-dom';

const ProfileCard = ({randProfileImgId, profile}) => {



  return(
    <div className={styles.card}>
      <Link to={`/profiles/${profile._id}`} state={{profile}} className={styles.profile_card_link}>
      <img 
        src={`https://picsum.photos/id/${randProfileImgId}/640/480`} 
        alt="Let's go to the movies!"
        className="card-img-top" 
      />
      <div className="card-body">
      </div>
      <div className='card-footer'>
        <button 
        className='viewbtn'
        onClick=''
        >        
          View {profile.name}'s Watch List
        </button>
      </div>
      </Link>
    </div>
)}

export default ProfileCard;