<template>
    <aside class="al-sidebar" sidebarresize>
        <sidebar-menu :menu-height="menuHeight"></sidebar-menu>
    </aside>
</template>

<script>
import { routerMap } from 'router'
import SidebarMenu from './SidebarMenu'
export default {
    name: 'Sidebar',
    data() {
        return {
            menuHeight: 0
        }
    },
    components: {
        SidebarMenu
    },
    mounted() {
        this.menuHeight = this.$el.clientHeight - 84
    }
}
</script>
