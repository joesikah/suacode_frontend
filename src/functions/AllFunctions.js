import ShowAlert from "../components/Alerts/all_alerts";
import BaseService from "../mixins/baseServices";
import global_variables from "../mixins/globarVars"


//Delete story function
export const DeleteStory = (storyId) => {

    const the_route = global_variables().delete_story + `/${storyId}`;

    BaseService.delete_api(the_route)
        .then((response) => {
            console.log(response);
            ShowAlert.success_alert('Success', 'Story Deleted!', 'Done')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })
        .catch((error) => {
            console.log(error)
            ShowAlert.error_alert('Error', 'Story was not deleted!', 'Retry')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })

}




//Post story function
export const PostNewStory = (data) => {

    const the_route = global_variables().post_story;

    BaseService.post_api(the_route, data)
        .then((response) => {
            console.log(response);
            ShowAlert.success_alert('Success', 'New Story Created!', 'Done')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })
        .catch((error) => {
            console.log(error)
            ShowAlert.error_alert('Error', 'Error occured while creating new story!', 'Retry')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })

}




//update story function
export const UpdateStory = (storyId, data) => {

    const the_route = global_variables().update_story + `/${storyId}`;

    BaseService.patch_api(the_route, data)
        .then((response) => {
            console.log(response);
            ShowAlert.success_alert('Success', 'Story Updated!', 'Done')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })
        .catch((error) => {
            console.log(error)
            ShowAlert.error_alert('Error', 'Error occured while updating story!', 'Retry')
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
        })

}