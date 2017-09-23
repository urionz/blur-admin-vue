<template>
    <ul class="al-sidebar-list" id="al-sidebar-list">
        <sidebar-menu-item v-for="(item, index) in routes" :key="item.name" :menuItem="item"></sidebar-menu-item>
    </ul>
</template>

<script>
import SidebarMenuItem from './SidebarMenuItem'
import { routerMap } from 'router'
export default {
    name: 'SidebarMenu',
    data() {
        return {
            routes: []
        }
    },
    props: [
        'menuHeight'
    ],
    watch: {
        '$route'(route) {
            this.routes.forEach((v) => {
                console.log(v)
            })
        }
    },
    components: {
        SidebarMenuItem
    },
    created() {
        routerMap.forEach((v) => {
            if (v.name === 'root') {
                this.routes = v.children
                this.routes.forEach((v) => {
                    if (v.name === this.$route.name) {
                        v.selected = true
                    }
                })
            }
        })
    }
}
</script>
