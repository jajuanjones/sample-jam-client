import React, {useRef} from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { createProfile } from "./ProfileManager"

export const CreateProfile = () => {
    const bio = useRef()
    const profileImg = useRef()
    const tags = useRef()
    const history = useHistory()
    const {userId} = useParams()
    
    const handleNewProfile = (e) => {
        e.preventDefault()

        const newProfile = {
            "bio": bio.current.value,
            "profile_img": profileImg.current.value,
            "tags": tags.current.value
        }

        createProfile(newProfile).then(history.push(`/profile-page/${userId}`))
    }

    // with the way I have my backend set up on the bio should be a required part of the form correct?
    return(
        <>
            <main>
                <form onSubmit={handleNewProfile}>
                <h3>Create Your Profile</h3>
                <fieldset>
                    <label htmlFor="inputBio"> Tell us about you </label>
                    <input ref={bio} type="text" name="bio" required />
                </fieldset>
                {/* <fieldset>
                    <label htmlFor="inputPhoto"> Upload a photo </label>
                    <input ref={profileImg} type="text" name="profileImg" />
                </fieldset> */}
                <fieldset>
                    <label htmlFor="inputTags"> What do you do? </label>
                    <input ref={tags} type="checkboxes" name="tags" />
                </fieldset>
                <fieldset>
                    <button type="submit">Create</button>
                </fieldset>
                </form>
                <section>
                Want to skip this step? <Link to="/forums">Visit forum</Link>
                </section>
            </main>
        </>
    )
}
