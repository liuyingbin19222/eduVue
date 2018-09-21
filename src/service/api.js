export const baseurl = "http://192.168.76.209:8080/api/"
export function getCourseList(url){
    axios.get(url)
        .then(function(response){
            return ;
        })
        .catch((error) => {
            
        })
}
