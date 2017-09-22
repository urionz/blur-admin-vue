<template>
    <div class="page-top clearfix" maxHeight="50">
        <a class="al-logo clearfix">
            <span>ng2-</span>admin</a>
        <a class="collapse-menu-link ion-navicon"></a>

        <div class="search">
            <i class="ion-ios-search-strong" ng-click="startSearch()"></i>
            <input id="searchInput" type="text" placeholder="Search for...">
        </div>

        <div class="user-profile clearfix">
            <div class="dropdown al-user-profile">
                <a class="profile-toggle-link dropdown-toggle" id="user-profile-dd" data-toggle="dropdown" aria-expanded="false">
                    <img src="http://akveo.com/ng2-admin/assets/img/app/profile/Nasta.png">
                </a>
                <ul class="dropdown-menu top-dropdown-menu profile-dropdown" aria-labelledby="user-profile-dd">
                    <li class="dropdown-item">
                        <a href>
                            <i class="fa fa-user"></i>Profile</a>
                    </li>
                    <li class="dropdown-item">
                        <a href>
                            <i class="fa fa-cog"></i>Settings</a>
                    </li>
                    <li class="dropdown-item">
                        <a href class="signout">
                            <i class="fa fa-power-off"></i>Sign out</a>
                    </li>
                </ul>
            </div>
            <ul class="al-msg-center clearfix">
                <li class="dropdown">
                    <a href class="dropdown-toggle" id="msg-dd1" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-bell-o"></i>
                        <span>11</span>

                        <div class="notification-ring"></div>
                    </a>

                    <div class="top-dropdown-menu dropdown-menu" aria-labelledby="msg-dd1">
                        <i class="dropdown-arr"></i>

                        <div class="header clearfix">
                            <strong>Notifications</strong>
                            <a href>Mark All as Read</a>
                            <a href>Settings</a>
                        </div>
                        <div class="msg-list">
                            <a class="clearfix">
                                <div class="img-area"><img src=""></div>
                                <div class="msg-area">
                                    <div>111</div>
                                    <span>222</span>
                                </div>
                            </a>
                        </div>
                        <a href>See all notifications</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href class="msg dropdown-toggle" id="msg-dd2" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-envelope-o"></i>
                        <span>23</span>
                        <div class="notification-ring"></div>
                    </a>
                    <div class="top-dropdown-menu dropdown-menu" aria-labelledby="msg-dd2">
                        <i class="dropdown-arr"></i>
                        <div class="header clearfix">
                            <strong>Messages</strong>
                            <a href>Mark All as Read</a>
                            <a href>Settings</a>
                        </div>
                        <div class="msg-list">
                            <a class="clearfix">
                                <div class="img-area"><img src=""></div>
                                <div class="msg-area">
                                    <div>asdsad</div>
                                    <span>3w4234</span>
                                </div>
                            </a>
                        </div>
                        <a href>See all messages</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import '../../styles/theme/components/navbar'
</style>


