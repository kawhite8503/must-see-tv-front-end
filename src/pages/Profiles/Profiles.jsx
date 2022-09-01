import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
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
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
      :
        <p>No audience yet</p>
      }
    </>
  )
}
 
export default Profiles