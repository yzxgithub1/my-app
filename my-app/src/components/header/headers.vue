<template>
    <div class="header">
        <div class="header-top">
            {{seller.name}}
        </div>
        <div class="header-bottom"></div>
    </div>
</template>

<script>
export default {
    props:{
        seller:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>
.header{
    
}
</style>