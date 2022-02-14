<template>
    <div>
        <TopHeader/>
        <Navigation/>
    </div>
</template>

<script>
import TopHeader from './global/TopHeader.vue'
import Navigation from './global/Navigation.vue'
export default {
    components:{
        TopHeader,
        Navigation
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>