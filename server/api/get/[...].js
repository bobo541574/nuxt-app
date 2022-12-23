import { useAuth } from "~/stores/user.js";

export default defineEventHandler(async (event) => {
    const paramsUrl = event.context.params._;
    const auth = useAuth();
    
    const { data } = await $fetch(`http://localhost:8000/api/${paramsUrl}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-API-TOKEN': auth.apiKey,
            Authorization: auth.token,
        },
    });

    if (data && data.data) {
        return data.data 
    } else {
        return data;
    }
});
