import * as profileUtil from '../util/profile_api_util'

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES';

export const receiveProfiles = profiles => ({
    type: RECEIVE_PROFILES, 
    profiles
})

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
})

export const removeProfile = profileId => ({
    type: REMOVE_PROFILE,
    profileId
})

export const fetchProfiles = () => dispatch => (
    profileUtil.fetchProfiles()
        .then(profiles => dispatch(receiveProfiles(profiles)))
)

export const fetchProfile = profileId => dispatch => (
    profileUtil.fetchProfile(profileId)
        .then(profile => dispatch(receiveProfile(profile)))
)

export const createProfile = profile => dispatch => (
    profileUtil.createProfile(profile)
        .then(madeProfile => dispatch(receiveProfile(madeProfile)))
)

export const updateProfile = profile => dispatch => (
    profileUtil.updateProfile(profile)
        .then(updatedProfile => dispatch(receiveProfile(updatedProfile)))
)

export const deleteProfile = profileId => dispatch => (
    profileUtil.deleteProfile(profileId)
        .then((profile) => dispatch(removeProfile(profile.id)))
)