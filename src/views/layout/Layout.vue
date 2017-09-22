<template>
    <div>
        <sidebar></sidebar>
        <navbar></navbar>
        <app-main></app-main>
        <foot></foot>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Foot } from 'views/layout'
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        AppMain,
        Foot
    }
}
</script>


