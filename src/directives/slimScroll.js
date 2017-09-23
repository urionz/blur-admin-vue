import $ from 'jquery'

import 'jquery-slimscroll'

export default {
    update(changes) {

    },
    bind(el, binding) {
        // console.log(binding.value.slimScrollOptions)
        // $(el).slimScroll({
        //     height: this.params.height
        // })
    },
    unbind(el) {
        $(el).slimScroll({ destroy: true })
    }
}
