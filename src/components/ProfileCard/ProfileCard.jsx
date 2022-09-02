import styles from './ProfileCard.module.css'

const ProfileCard = ({randProfileImgId, profile}) => {



  return(
    <div className={styles.card}>
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
    </div>
)}

export default ProfileCard;