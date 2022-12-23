<template>
    <div>
        This is the home page.
        <ul v-if="!loading.apps">
            <li v-for="app in apps" :key="app.id">
                {{ app.name }}
            </li>
            <!-- {{error.message}} -->
            <br />
        </ul> 
    </div>
</template>
 
<script setup>
    import api from "~/utils/api.js";
    const route = useRoute();
    const apps = reactive({});
    const error = ref(null);
    const loading = reactive({
        apps: false,
    });
    // const { data: app } = await api.get('/api/get/api-app/1');
    // const { pending: appLoading, data: apps, refresh: appsRefresh } = 
    await api.get('/api/get/api-app/list')
    .then(res => {
        Object.assign(apps, res.data.value);
        loading.apps = res.pending.value;
        
        error.value = res.error.value

        console.log("apps: ",apps)
        res.refresh();
    })
    .catch(err => {
        console.log("err: ", err)
    });

    // await api.post('/api/post/api-app/create', {
    //     'name': 'Test App 01',
    //     'merchant_business_id': 321456,
    //     'read_only': false,
    //     'active': true,
    //     'free_api_usage': true
    // })
    // .then(res => {
    //     Object.assign(apps, res.data.value);
    //     loading.apps = res.pending.value;
        
    //     error.value = res.error.value;

    //     console.log("apps: ",apps);
    //     res.refresh();
    // })
    // .catch(err => {
    //     console.log("err: ", err)
    // })

    // await appsRefresh();
    // // const { data: appStore } = await api.post('/api/post/api-app');
    // const { data: appUpdate, error, refresh: appRefresh } = await api.post('/api/post/api-app/create', {
    //     'name': 'Test App 01',
    //     'merchant_business_id': 321456,
    //     'read_only': false,
    //     'active': true,
    //     'free_api_usage': true
    // }); 

    // console.log(error.value);

    // if (process.client && error.value) {
    //     await appRefresh()
    // }


</script>