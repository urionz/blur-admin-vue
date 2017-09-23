<template>
    <div>
        <li :key="menuItem.name" :title="menuItem.name" class="al-sidebar-list-item" :class="{'selected': $route.name === menuItem.name, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}">
            <router-link @click="toggleSubMenu" v-if="!menuItem.children" class="al-sidebar-list-link" :to="menuItem.path">
                <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                <span translate>{{ menuItem.name }}</span>
            </router-link>

            <a @click="toggleSubMenu" v-if="menuItem.children" class="al-sidebar-list-link">
                <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                <span translate>{{ menuItem.name }}</span>
                <b class="fa fa-angle-down" :class="{'fa-angle-up': menuItem.expanded}"></b>
            </a>

            <ul v-if="menuItem.children" class="al-sidebar-sublist" :class="{'slide-right': menuItem.slideRight}">
                <sidebar-menu-item v-for="(item, index) in menuItem.children" :key="item.name" :menuItem="item"></sidebar-menu-item>
            </ul>
        </li>

    </div>
</template>

<script>
import SidebarMenuItem from './SidebarMenuItem'
import $ from 'jquery'
export default {
    name: 'SidebarMenuItem',
    components: {
        SidebarMenuItem
    },
    props: {
        menuItem: {
            type: Object
        }
    },
    created() {
        if (this.menuItem.children) {
            this.menuItem.children.forEach((v, k) => {
                if (v.name === this.$route.name) {
                    this.menuItem.expanded = true
                }
            })
        }
    },
    methods: {
        toggleSubMenu(event) {
            if ($(event.currentTarget).next('ul').length < 1) return
            const submenu = $(event.currentTarget).next('ul')
            this.menuItem.expanded = !this.menuItem.expanded
            submenu.slideToggle()
        }
    }
}
</script>
