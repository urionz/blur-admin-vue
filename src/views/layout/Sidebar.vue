<template>
    <aside class="al-sidebar" sidebarresize>
        <ul class="al-sidebar-list" id="al-sidebar-list">
            <template v-for="(item, index) in routes">
                <li :ref="item.name" :key="item.name" v-if="item.children" v-on:click="collspan(index)" class="al-sidebar-list-item with-sub-menu" :class="{ 'ba-sidebar-item-expanded': routes[index].collspan, 'selected': $route.name === item.name }" :title="item.name">
                    <a class="al-sidebar-list-link">
                        <i :class="item.icon"></i>
                        <span translate>{{item.name}}</span>
                        <b class="fa fa-angle-down"></b>
                    </a>
                    <template v-for="child in item.children">
                        <ul class="al-sidebar-sublist" :key="child.name">
                            <li class="ba-sidebar-sublist-item" :title="child.name">
                                <router-link class="al-sidebar-list-link" :to="child.name">
                                    <span translate>{{child.name}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </template>

                </li>
                <li :key="item.name" class="al-sidebar-list-item" :class="$route.name === item.name ? 'selected':''" :title="item.name" v-else>
                    <router-link class="al-sidebar-list-link" :to="item.name">
                        <i :class="item.icon"></i>
                        <span translate>{{item.name}}</span>
                    </router-link>
                </li>
            </template>
        </ul>
        <div class="sidebar-hover-elem show-hover-elem">
        </div>
    </aside>
</template>

<script>
import { routerMap } from 'router'
export default {
    name: 'Sidebar',
    data() {
        return {
            routes: {}
        }
    },
    created() {
        routerMap.forEach((v) => {
            if (v.name === 'root') {
                this.routes = v.children
            }
        })
    },
    methods: {
        collspan(index) {
            this.routes[index].collspan = !this.routes[index].collspan
        }
    }
}
</script>
