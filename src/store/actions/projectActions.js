export const createProject = (project) => {
 return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore(); 
    firestore.collection('media').add({
       ...project
     }).then(() => {
       dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
     }).catch(err => {
       dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
     });
   }
 };