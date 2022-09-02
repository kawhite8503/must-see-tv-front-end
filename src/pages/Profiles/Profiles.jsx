import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profiles = () => {
  
  const profileIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1> Welcome audience!</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <ProfileCard 
            randProfileImgId={profileIds[Math.floor(Math.random()*(profileIds.length))]}
            profile={profile}
            />
          )}
        </>
      :
        <p>No audience yet</p>
      }
    </>
  )
}
 
export default Profiles